import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "671108516015f9de96dcc94a",
      user: "670fefdd22f04c88c33b4b11",
      title: "rjkbkb",
      tag: "privet",
      desc: "hdydytdcjhjhgjhbjb",
      date: "2024-10-17T12:51:29.561Z",
      __v: 0,
    },
    {
      _id: "67122a9660a35bed69ba9eda",
      user: "670fefdd22f04c88c33b4b11",
      title: "title2",
      tag: "general",
      desc: "rohan is good boy yar",
      date: "2024-10-18T09:29:58.998Z",
      __v: 0,
    },
    {
      _id: "67122a9760a35bed69ba9edc",
      user: "670fefdd22f04c88c33b4b11",
      title: "title2",
      tag: "general",
      desc: "rohan is good boy yar",
      date: "2024-10-18T09:29:59.216Z",
      __v: 0,
    },
    {
      _id: "67122a9760a35bed69ba9ede",
      user: "670fefdd22f04c88c33b4b11",
      title: "title2",
      tag: "general",
      desc: "rohan is good boy yar",
      date: "2024-10-18T09:29:59.432Z",
      __v: 0,
    },
    {
      _id: "6713afaf58bd98f29424936c",
      user: "670fefdd22f04c88c33b4b11",
      title: "title2fg",
      tag: "genengfgngnral",
      desc: "rohan is good boyfgnfgnfg yar",
      date: "2024-10-19T13:10:07.395Z",
      __v: 0,
    },
    {
      _id: "6713afb558bd98f29424936e",
      user: "670fefdd22f04c88c33b4b11",
      title: "title5",
      tag: "genengfgngnral",
      desc: "rohan is good boyfgnfgnfg yar",
      date: "2024-10-19T13:10:13.559Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //add a note
  const addNote = (title,desc,tag) => {
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
  };

  //delete a note
  const deleteNote = () => {};

  /// edit a note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
