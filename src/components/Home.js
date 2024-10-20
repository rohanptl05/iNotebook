import React from "react";
import Notes from "./Notes";

const Home = () => {
  return (
    <>
      <div className="container">
        <h2>Add Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="text" className="form-control" id="pws" />
         
          </div>
         
         
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <Notes />
    </>
  );
};

export default Home;
