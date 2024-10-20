import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "671108516015f9de96dcc94a",
      user: "670fefdd22f04c88c33b4b11",
      title: "rjkbkb",
      tag: "privet",
      decs: "hdydytdcjhjhgjhbjb",
      date: "2024-10-17T12:51:29.561Z",
      __v: 0,
    },
    {
      _id: "67122a9660a35bed69ba9eda",
      user: "670fefdd22f04c88c33b4b11",
      title: "title2",
      tag: "general",
      decs: "rohan is good boy yar",
      date: "2024-10-18T09:29:58.998Z",
      __v: 0,
    },
    {
      _id: "67122a9760a35bed69ba9edc",
      user: "670fefdd22f04c88c33b4b11",
      title: "title2",
      tag: "general",
      decs: "rohan is good boy yar",
      date: "2024-10-18T09:29:59.216Z",
      __v: 0,
    },
    {
      _id: "67122a9760a35bed69ba9ede",
      user: "670fefdd22f04c88c33b4b11",
      title: "title2",
      tag: "general",
      decs: "rohan is good boy yar",
      date: "2024-10-18T09:29:59.432Z",
      __v: 0,
    },
    {
      _id: "6713afaf58bd98f29424936c",
      user: "670fefdd22f04c88c33b4b11",
      title: "title2fg",
      tag: "genengfgngnral",
      decs: "rohan is good boyfgnfgnfg yar",
      date: "2024-10-19T13:10:07.395Z",
      __v: 0,
    },
    {
      _id: "6713afb558bd98f29424936e",
      user: "670fefdd22f04c88c33b4b11",
      title: "title5",
      tag: "genengfgngnral",
      decs: "rohan is good boyfgnfgnfg yar",
      date: "2024-10-19T13:10:13.559Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);


  //add a note


  //delete a note


  /// edit a note

  return (
    <NoteContext.Provider value={{ notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;