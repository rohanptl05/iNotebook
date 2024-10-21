import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
const Notes = () => {
  const context = useContext(noteContext);
  const [note, setNote] = useState({ id: "", etitle: "", edesc: "", etag: "" });
  const { notes, getNote, editNote } = context;

  useEffect(() => {
    getNote();
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id || "",
      etitle: currentNote.title || "",
      edesc: currentNote.desc || "",
      etag: currentNote.tag || "",
    });
  };

  // const { addNote } = context;
  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edesc, note.etag);
    // e.preventDefault();
    refClose.current.click();
  };
  const handleOnchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddNote />

      <button
        ref={ref}
        // refClose={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Notes
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form>
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={note.etitle}
                      id="etitle"
                      name="etitle"
                      minLength={5}
                      required
                      onChange={handleOnchange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="edesc" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={note.edesc}
                      id="edesc"
                      name="edesc"
                      minLength={5}
                      required
                      onChange={handleOnchange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={note.etag}
                      id="etag"
                      name="etag"
                      minLength={5}
                      required
                      onChange={handleOnchange}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                disabled={note.etitle.length < 5 || note.edesc.length < 5}
                onClick={handleClick}
                className="btn btn-primary"
              >
                Update Notes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container row">
        <h2>Your Notes</h2>
        <div className="container">
          {notes.length === 0 && "Notes Not Founds"}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
