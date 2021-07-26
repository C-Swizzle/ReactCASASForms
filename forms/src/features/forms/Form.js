import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    firstNameChange,
    selectFirstName
} from "./formSlice"
import OneInput from './OneInput';
import OneSelect from "./OneSelect";
import OneCheckBox from './OneCheckBox';

export default function Form(props) {
    const [dontRevealIdentity, setDontRevealIdentity] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState();
    const [anotherPhoneNumber, setAnotherPhoneNumber] = useState(false);
    const firstName = useSelector(selectFirstName);
    const dispatch = useDispatch();
    const phoneNumberOptions = ["Alternate","Business","Fax","Home","Other","Work"]
    const handleSubmit = event => {
        
    }
    const handleChecked = event => {
        console.log(event.target.checked)
    }
    
    return  (
        <div className="container">
            
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <h2>Section 1 - General Information</h2>
            <div>Complete all the sections and submit the completed form. If you have any questions, contact the Department of Housing and Community Development at (800) 952-8356.</div>
            
            
            <form>
                
                <OneCheckBox 
                text="I request that HCD does not reveal my identity to my mobilehome park owner or operator." 
                type="dontRevealIdentity"
                checked={dontRevealIdentity}
                handleChange={()=>{setDontRevealIdentity(!dontRevealIdentity)}}
                />
                <div className="row">
                    <OneInput name= "Last Name" type="lastName" size="4" />
                    <OneInput name="First Name" type="firstName" size="4"/>
                    <OneInput name="Middle Initial" type="middleInitial" size="4"/>
                    <OneInput name="Email" type="email" size="6"/>
                    <OneInput name="Confirm Email" type="confirmEmail" size="6"/>
                    
                </div>

                <p>Please enter your Email if you would like to receive a copy of this complaint submission.</p>
                <div className="row">
                    
                    <OneSelect options={phoneNumberOptions} name="Phone Type"/>
                    <OneInput name="Phone Number" type="phoneNumber" size="6" />
                    <OneCheckBox 
                    text="Add another phone number" 
                    type="addAnotherPhoneNumber" 
                    checked={anotherPhoneNumber} 
                    handleChange = {()=>setAnotherPhoneNumber(!anotherPhoneNumber)}
                    />

                    {anotherPhoneNumber ? /*conditionally render extra phone inputs iff checkbox is checked*/
                    <> 
                    <OneSelect options={phoneNumberOptions} name="Phone Type"/>
                    <OneInput name="Phone Number" type="phoneNumber" size="6" />
                    </> 
                    : ""}

                </div>
                <button type="submit" className="btn btn-primary" onClick = {handleSubmit}>Submit</button>
            </form>
            
        </div>
    )
}