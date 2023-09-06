import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {useNavigate} from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Login = () => {

    let navigate = useNavigate();

    const [user, setUser] = React.useState({
        email : "", 
        password : ""
    });

    const [data, setData] = React.useState();

    const {username, email, password} = user;

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/auth/login", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : email,
                password : password
            })
        }).then((response) => response.json()).then((result) => {
            console.log(result);
            setData(result);
        }).catch((error) => console.log(error))
    };

  return (
    <div className="container-fluid">
        <Navbar />
      <form>
        <div className="mb-3">
          <label className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setUser({...user, email : e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setUser({...user, password : e.target.value})}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;