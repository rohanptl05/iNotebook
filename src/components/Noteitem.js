import React, { useContext} from "react";
import noteContext from "../context/notes/noteContext";


const Noteitem = (props) => {
  const context = useContext(noteContext);
  const{deleteNote}= context;
  const { note,updateNote } = props; 
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          {/* <h5 className="card-title"> {note._id}</h5> */}
          <h5 className="card-title"> {note.title}</h5>
          <p className="card-text">{note.desc} </p>
          <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}> edit</i>
          <i className="fa-sharp-duotone fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id);props.showAlert("deleted successfully","success")}}> delete</i>
          
        </div>
      </div>
    </div>
  );
};

export default Noteitem;


