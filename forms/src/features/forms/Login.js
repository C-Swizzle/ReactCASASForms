import React, {useState} from "react";
import OneInput from "./OneInput";
const axios = require("axios");
export default function Login(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitFailed, setSubmitFailed] = useState(false);
    const sendAPIRequest = () =>{
        axios.post("/login",{
            username:username,
            password:password
        })
        .then(res=>{
            if(res.status===200){ // success
                props.setLogin(true);
                props.setAuthToken(res.data.accessToken);
                props.setUser(username)
            } else{
                console.log("got here")
                setSubmitFailed(true);
            }
        })
        .catch(err=>{
            setSubmitFailed(true);
        })
    }

    return(
        <>
        <h4 className="text-center">Login</h4>
        <OneInput 
        name="Username"
        handleChange={setUsername}
        value={username}
        />
        <OneInput
        name="Password"
        type="password"
        handleChange={setPassword}
        value={password}
        />
        {submitFailed ?
        <>
        <div className="text-danger">Incorrect Username or Password, Please try again</div>
        </>
        :"" 
        }
        <button className="btn btn-success" onClick={sendAPIRequest}>Login</button>
        </>

    )
}