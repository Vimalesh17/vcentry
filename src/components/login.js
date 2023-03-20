import React from "react";

const LoginComponent = () => {
    return(
            <div>
            <label>Enter ur username</label>
            <input type="text" placeholder="Enter ur name"/>
            <br/>
            <label>Enter ur password</label>
            <input type="password" placeholder="Enter your password"/>
             <br/>
                <button>login</button>
            </div>
            )
        }

export default LoginComponent;