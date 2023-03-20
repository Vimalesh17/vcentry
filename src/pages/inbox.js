import React,{useState} from "react";

const InboxPage = () => {
    const [showHide,setDisplayMode]= useState();
    const ShowImage =() =>{

        setDisplayMode(true);
    }
    const HideImage=() =>{
        setDisplayMode(false);

    }
    return(
            <div >
                <h1>Here you can see your  inbox mail</h1>
                <div>
                    <button onClick={()=> ShowImage()}>Show Image</button>
                    <button onClick={()=>HideImage()}>Hide Image</button> 
                </div>
           {
            showHide &&
            <img src={require("../images/one.jpg")} width="300"alt="one"/>
           }

            </div>
    )
}

export default InboxPage;