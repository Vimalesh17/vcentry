import  React from "react";


const SidebarComponent = () =>{
    const Checking_voting_status = () =>{
        let age = prompt ("enter a age   ");
        if(age >= 18){
        alert("the person is eligible for vote");
    }
    else{
        alert("the person is not eligible for vote");
    }
         
}
    return(
        <div>
            <h2 className = "sidebar-text">sidebar  of this page</h2>
            <button onClick={()=> Checking_voting_status()}>ENTER A NUMBER</button>
            
        </div>
    )

}

export default SidebarComponent;