import React,{ useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [credentials, setCredentials] = useState({email:"",password:""})
    let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password}),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        localStorage.setItem("token",json.authtoken);
        navigate("/")
    }else{
        alert("Invalid Credentials");
    }
  };
  const handleOnchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
          value={credentials.email}
          onChange={handleOnchange}
            type="email"
            className="form-control"
            id="email"
            name="email"

            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
          value={credentials.password}
          onChange={handleOnchange}
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;