import { Await } from "react-router-dom";
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //GET  a note
  const getNote = async () => {
    //call api
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwZmVmZGQyMmYwNGM4OGMzM2I0YjExIn0sImlhdCI6MTcyOTA5ODEwN30.sd5OYthPIMJiDhqjOA56ESUouCFrp1SBC8he6-ju2hE"
      }
    });
    const json = await response.json();
    console.log(json)
    setNotes(json)
  }

  //add a note
  const addNote = async (title, desc, tag) => {
    //call api
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwZmVmZGQyMmYwNGM4OGMzM2I0YjExIn0sImlhdCI6MTcyOTA5ODEwN30.sd5OYthPIMJiDhqjOA56ESUouCFrp1SBC8he6-ju2hE"
      },
      body: JSON.stringify({ title, desc, tag })
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  }

  //delete a note
  const deleteNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwZmVmZGQyMmYwNGM4OGMzM2I0YjExIn0sImlhdCI6MTcyOTA5ODEwN30.sd5OYthPIMJiDhqjOA56ESUouCFrp1SBC8he6-ju2hE"
      },

    });
    const json =await response.json();
    console.log(json)



    
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  };

  /// edit a note
  const editNote = async (id, title, desc, tag) => {
    //call api
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwZmVmZGQyMmYwNGM4OGMzM2I0YjExIn0sImlhdCI6MTcyOTA5ODEwN30.sd5OYthPIMJiDhqjOA56ESUouCFrp1SBC8he6-ju2hE"
      },
      body: JSON.stringify({ title, desc,tag })
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))
    //logic to edit a clint
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].desc = desc;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
