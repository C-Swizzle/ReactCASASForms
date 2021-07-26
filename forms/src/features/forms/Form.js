import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    firstNameChange,
    selectFirstName
} from "./formSlice"
import OneInput from './OneInput';
export default function Form(props) {
    const [firstName,     setFirstName]     = useState("");
    const [lastName,      setLastName]      = useState("");
    const [middleInitial, setMiddleInitial] = useState("");
    const [dontRevealIdentity, setDontRevealIdentity] = useState(false);

    const handleSubmit = event => {
        
    }
    const handleChecked = event => {
        console.log(event.target.checked)
    }
    
    return  (
        <div className="container">
            
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <h2>Section 1 - General Information</h2>
            <form>
                
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dontRevealIdentity" value = {false} onChange = {handleChecked} />
                    <label className="form-check-label" for="exampleCheck1">I request that HCD does not reveal my identity to my mobilehome park owner or operator.</label>
                </div>
                
                

            <div className="row">
                <OneInput name= "Last Name" type="lastName" />
                <OneInput name="First Name" type="firstName"/>
                <OneInput name="Middle Initial" type="middleInitial"/>
                <div className="form-group col-md-4">
                    <label for="middleInitial">Middle Initial</label>
                    <input type="middleInitial" className="form-control" id="middleInitial" value= {middleInitial} onChange = {event => setMiddleInitial(event.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick = {handleSubmit}>Submit</button>
                </div>
                </form>
            
        </div>
    )
}