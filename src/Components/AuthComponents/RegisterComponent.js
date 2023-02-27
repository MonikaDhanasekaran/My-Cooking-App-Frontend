import React, { useState } from "react";
import axios from 'axios';
import { validateEmail } from "../Validations/helpers";
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import "./Auth.css";

const RegisterComponent = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobileNumber: "",
        role: "",
    });

    const handleSubmit = async (e) => {
        if (validateEmail(formData.email || "")) {
            alert("Email is invalid");
        } else if (
            !formData.password ||
            !formData.confirmPassword ||
            String(formData.password).trim().toLocaleLowerCase() !== String(formData.confirmPassword).trim().toLocaleLowerCase()
        ) {
            alert("Passwords doesn't match");
        } else {
            e.preventDefault();
            const response = await axios.post("https://my-cooking-app.onrender.com/cook/signup", {
                ...formData,
            });
            console.log(response);
            navigate("/");
        }
    }

    return (
        <div id="registerPage">
            <section className="h-100 h-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-xl-6">
                            <div className="card rounded-3">
                                <img src="https://img.freepik.com/free-vector/simple-sketches-chefs_1308-86082.jpg"
                                    className="w-100" style={{ borderTopLeftRadius: ".3rem", borderTopRightRadius: ".3rem" }}
                                    alt="Sample photo" />
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" id="registerTypo">Sign Up</h3>
                                    <form className="px-md-2">
                                        <div className="form-outline mb-4">
                                            <Grid item xs={12} sm={6}>
                                                < TextField type="text" name="name" label="Name"
                                                    style={{ width: "50%" }}
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </Grid>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline mb-4">
                                                    <Grid item xs={12} sm={6}>
                                                        < TextField type="text" name="uname" label="Username"
                                                            value={formData.userName}
                                                            onChange={(e) => setFormData({ ...formData, userName: e.target.value })} />
                                                    </Grid>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline mb-4">
                                                    <Grid item xs={12} sm={6}>
                                                        < TextField type="text" name="email" label="Email"
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                                    </Grid>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline mb-4">
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField label="Password" type="password" name="password"
                                                            value={formData.password}
                                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                                    </Grid>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline mb-4">
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField label="Confirm Password" type="password" name="confirmPassword"
                                                            value={formData.confirmPassword}
                                                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                                                    </Grid>
                                                </div>
                                            </div> <br />
                                            <div className="col-md-6 mb-4">
                                                <Grid item xs={12} sm={6}>
                                                    <FormControl variant="filled" style={{ width: "100%" }}>
                                                        <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-filled-label"
                                                            id="demo-simple-select-filled"
                                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                        >
                                                            <MenuItem value="admin">Admin</MenuItem>
                                                            <MenuItem value="user">User</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline mb-4">
                                                    <Grid item xs={12} sm={6}>
                                                        < TextField type="number" name="mobileNumber" label="Mobile Number"
                                                            style={{ alignItems: "center" }}
                                                            value={formData.mobileNumber}
                                                            onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} />
                                                    </Grid>
                                                </div>
                                            </div>
                                        </div>
                                        <Button variant="contained" id="registerButton" type="submit" onClick={handleSubmit}> Register </Button> <br /><br />
                                        Already have an account? <Link to="/">Sign in</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RegisterComponent;