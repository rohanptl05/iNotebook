import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context; // eslint-disable-next-line
  // const { notes, setNotes } = context; // eslint-disable-next-line
  return (
    <>
    <AddNote/>
    <div className="container row">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <Noteitem key={note._id} note={note} />;
      })}
    </div>
      </>
  );
};

export default Notes;
