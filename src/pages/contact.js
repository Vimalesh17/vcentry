import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const ContactPage = () => {

    const[formSubmit,formSubmitFunction]=useState({
        firstname:"",
        lastname:"",
        mobileno:"",
        message:""
    });

const submitForm=()=>{
    console.log(formSubmit);
}

    const handInputField = (event)=>{
        console.log(event.target.value);
        formSubmitFunction({...formSubmit,[event.target.name]:event.target.value});
    }

    return(
            <div className="main-page">
                <HeaderComponent></HeaderComponent>
                <div className="page-content">
            <h1>contact page</h1>
        <div className="space">
            <label className="label">Enter your first Name</label>
            <input className="input" type="text" placeholder="Enter your first Name" onChange={handInputField} name="firstname"/>
        </div>
        <div className="space">
            <label className="label">Enter your las Name</label>
            <input className="input" type="text" placeholder="Enter your last Name" onChange={handInputField} name="lastname"/>
        <div className="space">
            <label className="label">Enter your Mobile.no</label>
            <input  className="input" type="text" placeholder="Enter your mobile.no" onChange={handInputField} name="mobileno"/>
                <div className="space">
            <label className="msg">Message</label>
            <textarea onChange={handInputField} name="message"></textarea>
            </div>
            <div >
                <button className="button" onClick={()=>submitForm()}>submit</button>
            </div>
            </div>
        </div>

        </div>
            <FooterComponent></FooterComponent>
            </div>
            )
        }

export default ContactPage;