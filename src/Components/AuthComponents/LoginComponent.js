import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Auth.css";
import LoginRoundedIcon from '@mui/icons-material/Login';

const LoginComponent = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        if (formData.email === "" && formData.password === "") {
            alert("Please fill all Values!!!")
        }
        else {
            e.preventDefault();
            try {
                const response = await axios.post("https://my-cooking-app.onrender.com/cook/signin", {
                    ...formData,
                });
                if (response) {
                    localStorage.setItem("token", response.data.Token);
                    navigate("/home");
                }
                console.log(response);
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div id="loginPage">
            <form id="loginForm">
                <LoginRoundedIcon sx={{ fontSize: 50 }} color="success" />
                <h3 id="loginH3">Login</h3>
                <label id="loginLabel" for="username">Email</label>
                <input id="loginInput" type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" />
                <label id="loginLabel" for="password">Password</label>
                <input id="loginInput" type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Password" />
                <button type="submit" onClick={handleSubmit} id="loginButton">Log In</button> <br /><br />
                Don't have an account? &nbsp; <Link to="/signup">Sign Up</Link> <br /> <br />
                <Link to="/forgotpassword">forgot password?</Link>
            </form>
        </div >
    )
}

export default LoginComponent;