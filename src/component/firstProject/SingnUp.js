import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Singin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const navigate = useNavigate();

  const data = { name, email, password, confirmpassword };

  const login = async () => {
    console.log(data);
    if (name && email && password && confirmpassword) {
      await axios
        .post("https://sparkstoideas.cyclic.app/user/register", data)
        .then((res) => {
          console.log(res);
          if (res.data.result.success == 1) {
            navigate("/signin");
          } else {
            alert("register faild");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("fild the form");
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
          type="text"
          placeholder="name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <input
          type="email"
          placeholder="email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <div className='gen'>
          <input type='radio' name='gender' value='male' />
          <label for='female' className='gender'>  Female </label>
          <input type='radio' className='gender' name='gender' value='male' />
          <label for='male' className='gender-i'>  Male </label>
          <input type='radio' className='gender' name='gender' value='male' />
          <label for='other' className='gender-in2'>  Other </label>
        </div> */}

        {/* <input type='number' placeholder='phone Number*' /><br></br> */}
        <input
          type="password"
          placeholder="password*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="confirm password*"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <br></br>

        <input type="checkbox" className="check" />
        <label className="remember"> Remember me</label>
        <br />
        <br />
        <button onClick={login}>SIGN UP</button>
        <p className="end-p1">
          Already have an account?{" "}
          <span onClick={() => navigate("/signin")} style={{ color: "red" }}>
            Sign In
          </span>
        </p>
        <p className="end-p2">Copyright @ Your Website 2023</p>
      </div>
    </>
  );
}

export default Singin;
