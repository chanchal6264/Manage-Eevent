import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Singin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = () => {
    const data = { email, password };
    console.log(data);
    if (email && password) {
      axios
        .post("https://sparkstoideas.cyclic.app/user/login", data)
        .then((res) => {
          console.log(res);
          if (res.data.success == 1) {
            navigate("/");
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("filed the form");
    }
  };

  return (
    <>
      <div className="fillbox">
        <div className="icon">
          <FontAwesomeIcon icon={faLock} />
        </div>

        <h2>Contact Us</h2>

        <input
          type="email"
          placeholder="email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="password*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>

        <input type="checkbox" className="check" />
        <label className="remember"> Remember me</label>
        <br />
        <br />
        <button onClick={register}>SIGN IN</button>
        <div className="end-p">
          <p className="end-p1">Forgot Password?</p>
          <p className="end-p3">
            Don't have an account?{" "}
            <span onClick={() => navigate("/singup")} style={{ color: "red" }}>
              Sign Up
            </span>
          </p>
        </div>
        <p className="end-p2">Copyright @ Your Website 2023</p>
      </div>
    </>
  );
}

export default Singin;
