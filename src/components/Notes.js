import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext";
import Noteitem from './Noteitem';
const Notes = () => {
    const context = useContext(noteContext);
    // const { notes, setNotes } = context; // eslint-disable-next-line
    const { notes } = context; // eslint-disable-next-line
  return (
    <div className="container row">
    <h2>Your Notes</h2>
    {notes.map((note) => {
      return <Noteitem key={note._id} note={note} />
    })}
  </div>
  )
}

export default Notes
