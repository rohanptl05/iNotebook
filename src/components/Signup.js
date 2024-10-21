import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({name:"", email: "", password: "",cpassword:"" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password}=credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password}),
    });
    const json = await response.json();
    console.log(json);
 
      localStorage.setItem("token", json.authtoken);
      navigate("/");
   
  };
  const handleOnchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control" 
            onChange={handleOnchange}
            id="name"
            name="name"
            minLength={5}
            required
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control" 
            onChange={handleOnchange}
            id="email"
            name="email"
            minLength={5}
            required
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control" 
            onChange={handleOnchange}
            id="password"
            name="password"
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password" 
            onChange={handleOnchange}
            className="form-control"
            id="cpassword"
            name="cpassword"
            minLength={5}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;