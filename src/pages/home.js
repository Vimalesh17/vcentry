import React,{useEffect, useState} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import axios from "axios";

 const HomePage = () =>{

    useEffect(()=>{
        getUserProfile();

     },[])
 const [userProfiles,UpdateUserList]= useState([]);
    const getUserProfile =()=>{
        const url ="https://reqres.in/api/users?page=2";
        axios.get(url)
         .then( (response)=>{
 
            const userList = response.data.data;
            UpdateUserList(userList);
        })
         .catch ((error)=>{
console.log(error);

        })

    }
    return(
        <div className="main-page">
            <HeaderComponent></HeaderComponent>
            <div className="page-content">
            <h1>Welcome to home page</h1>
            <button onClick={() => getUserProfile()}>load user profile</button>
<table>
    <thead>
        <tr className="customers">
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>EmailId</th>
            <th>picture</th>
        </tr>
        
    </thead>
    <tbody>
        {
            userProfiles.map((value,index) =>{
                return(
                    <tr>
                        <td>{value.id}
                        </td>
                        <td>{value.first_name}</td>
                        <td>{value.last_name}</td>
                        <td>{value.email}</td>
                        <td>
                            <img src={value.avatar} alt="hey" className="profile_pic"/>
                            </td>
                    </tr>
                )
            })
        }
        {
            userProfiles.length === 0 && 
            <tr>
                <td colSpan={5}>No Records Found</td>
            </tr>
        }
    </tbody>
</table>
            
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
 }

 export default HomePage;