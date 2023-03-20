
import React,{useState} from "react";
import HeaderComponent from "../components/header";
//import { useNavigate } from "react-router-dom";

const SignInPage = () =>{
    //const navigate = useNavigate();
    //state variable
    //const [variableName,functionName] = useState(initialData);
    const[loginForm,loginFunction]=useState({
        username:"",
        password:""
    });
    const vaildateLogin = ()=> {
      //  navigate("/contact")
      //to call state_variableName
      console.log(loginForm);

    }
    const handInputField = (event)=>{
        console.log(event.target.value);
       // stateVariable_FunctionName({...statevariable_variableName, initialDatakey:value};)
         loginFunction({...loginForm,[event.target.name]:event.target.value});
        }

    return(
        <div className="main-page">
            <HeaderComponent></HeaderComponent>
            <div className="page-content form-align">
        <h1>Sign In</h1>
        <div className="space">
            <label className="label">Enter your Username</label>
            {/* add name= "initialDatakey" */}
            <input className="input" type="text" placeholder="Enter your Name" onChange={handInputField} name="username"/>
        </div>
        <div className="space">
            <label className="label">Enter your Password</label>
           {/* add name= "initialDatakey" */}
            <input  className="input" type="password" placeholder="Enter your password" onChange={handInputField} name="password"/>
        </div>
        <div className="btn" >
            <button className="button" onClick={() =>vaildateLogin()}>LogIn</button>
        </div>
        </div>
        </div>
    )
}


export default SignInPage;