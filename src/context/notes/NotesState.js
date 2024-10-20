import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host ="http://localhost:5000"
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

   //GET  a note
   const getNote = async() => {
    //call api
    const response = await fetch(`${host}/api/notes/fetchnotes`,{
     method:'GET',
     headers:{
       'Content-Type':'application/json',
       'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwZmVmZGQyMmYwNGM4OGMzM2I0YjExIn0sImlhdCI6MTcyOTA5ODEwN30.sd5OYthPIMJiDhqjOA56ESUouCFrp1SBC8he6-ju2hE"
     }
   });
  const json= await response.json();
   console.log(json)
   setNotes(json)
 }

  //add a note
  const addNote = async(title,desc,tag) => {
     //call api
     const response = await fetch(`${host}/api/notes/addnote`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwZmVmZGQyMmYwNGM4OGMzM2I0YjExIn0sImlhdCI6MTcyOTA5ODEwN30.sd5OYthPIMJiDhqjOA56ESUouCFrp1SBC8he6-ju2hE"
      },
      body:JSON.stringify({title,desc,tag})
    });
   const json= response.json();
    //todo api cll
    console.log("adding a new note")
    let note={
      _id: "6713afb558bd98f29424936e",
      user: "670fefdd22f04c88c33b4b11",
      title: title,
      tag: tag,
      desc: desc,
      date: "2024-10-19T13:10:13.559Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  }

  //delete a note
  const deleteNote = (id) => {
    console.log("delet a contant of id is:"+ id)
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  };

  /// edit a note
  const editNote = async (id,title,desc,tag) => {
    //call api
    const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwZmVmZGQyMmYwNGM4OGMzM2I0YjExIn0sImlhdCI6MTcyOTA5ODEwN30.sd5OYthPIMJiDhqjOA56ESUouCFrp1SBC8he6-ju2hE"
      },
      body:JSON.stringify({title,desc,tag})
    });
   const json= response.json();
    
    //logic to edit a clint
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id===id){
        element.title= title;
        element.desc=desc;
        element.tag=tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
