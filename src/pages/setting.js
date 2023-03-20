import React, { useState } from "react";
import HeaderComponent from "../components/header";

const SettingPage = () => {

    const [registerForm, registerFunction] = useState({
        name: "",
        email_id: "",
        passwrd: "",
        password_length: "",
        re_password: "",
        gender: "",
        date_of_birth: "",
        hobbies: [],
        education: "",
        location: "",
        address: ""
    });
    const [error, registerFormError] = useState({
        name: false,
        email_id: false,
        password: false,
        password_length: false,
        re_password: false,
        gender:false,
        date_of_birth: false,
        hobbies: false,
        education: false,
        location: false,
        address: false
    }

    )
    const handleFormField = (event) => {
        if (event.target.name === "hobbies") {
            if (event.target.checked) {
                registerForm.hobbies.push(event.target.value);
            }
            else {
                const index = registerForm.hobbies.indexOf(event.target.value);
                registerForm.hobbies.splices(index, 1);
            }
            registerFunction({ ...registerForm, hobbies: registerForm.hobbies });
        }
        else {
            registerFunction({ ...registerForm, [event.target.name]: event.target.value });
        }
    }

    const submitRegisterForm = () => {
        console.log(registerForm);
    //      if (registerForm.name === "") {
    //         registerFormError({ ...error, name: true });
    //     }
    //     else {
    //         registerFormError({ ...error, name: false });
    //     }



    //     if (registerForm.password === "") {
    //         registerFormError({ ...error, password: true });
    //     }
    //     else if (registerForm.password.length <= 8) {

    //         registerFormError({ ...error, password: false,password_length:true });
    //     }
    //     else {
    //         registerFormError({ ...error, password: false,password_length: false });
    //     }
    // }

    registerFormError(
        {
            ...error,
            name:(registerForm.name==="")?true:false,
            password:(registerForm.password==="")?true:false,
            gender:(registerForm.gender==="")?true:false
        }
    )}
    return (
        <div className="main-page">
            <HeaderComponent></HeaderComponent>
            <div className="page-content">
                <h3>Account Creation Form</h3>
                <div className="account_form">
                    <div className="section">
                        <label className="form_label">Enter your Name :</label>
                        <input className="form_input" type="text" placeholder="Enter your Name" onChange={handleFormField} name="name" />
                        {error.name && <p className="error-message">Entered name is Invalid</p>}
                    </div>
                    <div className="section">
                        <label className="form_label">Enter your Email.Id</label>
                        <input className="form_input" type="email" placeholder="Enter your Email.id" onChange={handleFormField} name="email_id" />
                        {error.email_id && <p className="error-message">Entered Email is Invalid</p>}
                    </div>
                    <div className="section">
                        <label className="form_label">Enter your Password</label>
                        <input className="form_input" type="Password" placeholder="Enter your Password" onChange={handleFormField} name="password" />
                        {error.password && <p className="error-message">Entered Password is Invalid</p>}
                        {error.password_length && <p className="error-message">Entered Password should be 8 characters</p>}
                    </div>
                    <div className="section">
                        <label className="form_label">RE-enter your Password</label>
                        <input className="form_input" type="Password" placeholder="RE-enter your Password" onChange={handleFormField} name="re_password" />
                        {error.re_password && <p className="error-message">Entered password is Invalid</p>}
                    </div>
                    <div className="section">
                        <label className="form_label">Select your Gender :</label>
                        <input type="radio" onChange={handleFormField} name="gender" value="Male" /> <label className="form_input">Male</label>
                        <input type="radio" onChange={handleFormField} name="gender" value="Female" /><label className="form_input">Female</label>
                        <input type="radio" onChange={handleFormField} name="gender" value="others" /><label className="form_input">Others</label>
                        {error.gender && <p className="error-message">Select anyone gender</p>}
                    </div>
                    <div className="section">
                        <label className="form_label">Select your date of birth</label>
                        <input className="form_input" type="date" onChange={handleFormField} name="date_of-birth" />
                        {error.date_of_birth && <p className="error-message">select your date of birth</p>}
                    </div>
                    <div className="section">
                        <label className="form_label">Select your hobbies :</label>
                        <input type="checkbox" onChange={handleFormField} name="hobbies" /><label className="form_input">Chess</label>
                        <input type="checkbox" onChange={handleFormField} name="hobbies" /><label className="form_input">Cricket</label>
                        <input type="checkbox" onChange={handleFormField} name="hobbies" /><label className="form_input">Caraom</label>
                        <input type="checkbox" onChnge={handleFormField} name="hobbies" /><label className="form_input">Tennis</label>
                        <input type="checkbox" onChange={handleFormField} name="hobbies" /><label className="form_input">vollyball</label>
                        <input type="checkbox" onChange={handleFormField} name="hobbies" /><label className="form_input">Hockey</label>
                        {error.hobbies && <p className="error-message">Select any one of hobbies</p>}
                    </div>
                    <div className="section">
                        <label className="form_label">Select your higher educaton</label>
                        <select className="form_input" onChange={handleFormField} name="education">
                            <option>SSLC</option>
                            <option>HSC</option>
                            <option>UG</option>
                            <option>PG</option>
                            <option>Doctrate</option>
                        </select>
                        {error.education && <p className="error-message">Select any one of educations</p>}
                    </div>
                    <div className="section">
                        <label className="form_label">Select your location</label>
                        <select className="form_input" onChange={handleFormField} name="location">
                            <option>Chennai</option>
                            <option>trichy</option>
                            <option>salem</option>
                            <option>coimbatore</option>
                            <option>tuticorn</option>
                        </select>
                        {error.location && <p className="error-message">Select any one of location</p>}
                    </div>
                    <div className="section textarea_center">
                        <label className="form_label">Enter your address:</label>
                        <textarea className="form_input" placeholder="enter your address" onChange={handleFormField} name="address"></textarea>
                    </div>
                    {error.address && <p className="error-msg">Entered Address is Invalid</p>}

                    <div>
                        <button className="form_input" onClick={() => submitRegisterForm()}>Submit form</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SettingPage;