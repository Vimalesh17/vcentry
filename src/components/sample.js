import React from "react";

const SampleComponent = () =>{
    let username= "vimal";
    let address = {
        street: "9,Gandhinagar",
        area:"velankanni",
        city:"nagapattinam"
    };

        const list = ["mr.abc","mr.cde","mr,fgh"];

        const onLogout = () =>{
            alert("you have been successfully logout");
        }
    return(
        <div>
            <h2>"welcome back, {username}"</h2>
            <button onClick={ () => onLogout ()}>logout</button>
            <h3>{address.area},{address.city}</h3>
            <h2>{list[0]},{list[1]},{list[2]}</h2>
            <h2 className = "header-text">Header of this page</h2>
        </div>
    )
}

export default SampleComponent;