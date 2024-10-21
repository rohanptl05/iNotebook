import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", desc: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.desc, note.tag);
    setNote({ title: "", desc: "", tag: "" });
  };
  const handleOnchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h2>Add Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            minLength={5} required
            value={note.title}
            onChange={handleOnchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            minLength={5} required
            value={note.desc}
            name="desc"
            onChange={handleOnchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
           Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            minLength={5} required
            value={note.tag}
            name="tag"
            onChange={handleOnchange}
          />
        </div>

        <button type="submit" disabled={note.title.length<5 || note.desc.length<5 } className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
