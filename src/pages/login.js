import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import axios from 'axios';
import { FaEyeSlash,FaEye } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

  const [ visibilty, setVisibilty]=useState(true);
  const [loginForm,setLoginForm]=useState({
    email:"",
    password:""
  });
   const [invalidCredential,CheckCredential]=useState(false);
   const [loader,CheckLoader]=useState(false);
   const navigate = useNavigate();
  

  const viewPassword =() =>{
       setVisibilty(false);
  }
  const hidePassword =() =>{
    setVisibilty(true);
  }
  const handleInput=(event)=>{
setLoginForm({...loginForm,[event.target.name]:event.target.value});
  }
  const submitLoginForm=()=>{
// console.log(loginForm);
CheckLoader(true);
const url="https://reqres.in/api/login";

axios.post(url,loginForm)
  .then((response)=>{
    console.log(response);
    CheckCredential(false);
    CheckLoader(false);
    navigate("/");
    
  })
  .catch((error =>{
    console.log(error);
   CheckCredential(true);
   CheckLoader(false);
  }))
  }
  return (
    <div className="main-page" >
        <HeaderComponent></HeaderComponent>        
     <div className="page-content">
        <div className='page-align'>
        <h1>Login Page</h1>
 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleInput} name = "email"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type={visibilty?"password":"text"} placeholder="Password" className="password-field" onChange={handleInput} name = "password"/>

        { visibilty ? <FaEyeSlash size={"34px"} onClick = {()=> viewPassword()} className="icon"/> :<FaEye size={"34px"} onClick={()=> hidePassword()} className="icon"/>} 
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
{
     invalidCredential && <Form.Text className='red-text'>
        The Email or password entered is wrong!
      </Form.Text>}
      <div>
      <Button variant="primary" onClick={()=> submitLoginForm()}>
        Submit

       {loader && <Spinner animation="border" role="status" className ="loader">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
      </Button>
      </div>
    </Form>
        </div>
        </div>
<FooterComponent></FooterComponent>
        </div>
  )
}

export default LoginPage;