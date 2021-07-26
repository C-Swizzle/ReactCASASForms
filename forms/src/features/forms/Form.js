import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    firstNameChange,
    selectFirstName
} from "./formSlice"
import OneInput from './OneInput';
import OneSelect from "./OneSelect";
import OneCheckBox from './OneCheckBox';
import LineBreak from './LineBreak';
import Row from './Row';

export default function Form(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleInitial, setMiddleInitial] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");


    const [dontRevealIdentity, setDontRevealIdentity] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState();
    const [anotherPhoneNumber, setAnotherPhoneNumber] = useState(false);



    // const firstName = useSelector(selectFirstName);
    // const dispatch = useDispatch();
    const phoneNumberOptions = ["Alternate","Business","Fax","Home","Other","Work"]
    const handleSubmit = event => {
        event.preventDefault()
        console.log(event.target)
        console.log(phoneNumber)
    }
    const handleChecked = event => {
        console.log(event.target.checked)
    }
    
    return  (
        <div className="container">
            
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <h2>Section 1 - General Information</h2>
            <hr />
            <div>Complete all the sections and submit the completed form. If you have any questions, contact the Department of Housing and Community Development at (800) 952-8356.</div>
            
            
            <form>
                
                <OneCheckBox 
                text="I request that HCD does not reveal my identity to my mobilehome park owner or operator." 
                type="dontRevealIdentity"
                checked={dontRevealIdentity}
                handleChange={()=>{setDontRevealIdentity(!dontRevealIdentity)}}
                />
                <Row>
                    <OneInput name="Last Name" type="lastName" size="4" handleChange={setLastName} value={lastName}/>
                    <OneInput name="First Name" type="firstName" size="4"handleChange={setFirstName} value={firstName}/>
                    <OneInput name="Middle Initial" type="middleInitial" size="4"handleChange={setMiddleInitial} value={middleInitial}/>
                    <OneInput name="Email" type="email" size="6"handleChange={setEmail} value={email}/>
                    <OneInput name="Confirm Email" type="confirmEmail" size="6"handleChange={setConfirmEmail} value={confirmEmail}/>
                    
                </Row>

                <p>Please enter your Email if you would like to receive a copy of this complaint submission.</p>
                <Row>
                    
                    <OneSelect options={phoneNumberOptions} name="Phone Type"/>
                    <OneInput name="Phone Number" type="phoneNumber" size="6" handleChange = {setPhoneNumber} value={phoneNumber}/>
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

                </Row>


                <h2>Physical Location of Home</h2>
                <hr />
                <p>Location locked to California Mobilehome locations only.</p>


                <Row>
                <OneInput name="Address Number and Street (No P.O. Box accepted)" type="address" size="6" />
                </Row>
                <LineBreak height="25px" />

                <Row>
                <OneInput name="Address Line 2" type="addressLineTwo" size="6" />
                </Row>
                <LineBreak height="25px" />

                <Row>
                <OneInput name="Zip Code" type="zipCode" size="6" />
                </Row>
                <LineBreak height="25px" />

                <Row>
                <OneInput name="State/Province" type="stateOrProvince" size="6" />
                </Row>
                <LineBreak height="25px" />

                <button type="submit" className="btn btn-primary" onClick = {handleSubmit}>Submit</button>
            </form>
            
        </div>
    )
}