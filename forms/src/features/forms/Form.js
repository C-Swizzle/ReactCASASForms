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
    const [firstName,          setFirstName]          = useState("");
    const [lastName,           setLastName]           = useState("");
    const [middleInitial,      setMiddleInitial]      = useState("");
    const [email,              setEmail]              = useState("");
    const [confirmEmail,       setConfirmEmail]       = useState("");
    const [phoneNumber,        setPhoneNumber]        = useState("");
    const [anotherPhoneNumber, setAnotherPhoneNumber] = useState("");
    const [address,            setAddress]            = useState("");
    const [addressLineTwo,     setAddressLineTwo]     = useState("");
    const [zipCode,            setZipCode]            = useState("");
    const [city,               setCity]               = useState("")
    const [stateOrProvince,    setStateOrProvince]    = useState("");
    
    const [anotherPhoneNumberBool, setAnotherPhoneNumberBool] = useState(false);



    // const firstName = useSelector(selectFirstName);
    // const dispatch = useDispatch();
    const phoneNumberOptions = ["Alternate","Business","Fax","Home","Other","Work"]
    const handleSubmit = event => {
        event.preventDefault()
        console.log(event.target)
        console.log(phoneNumber)
        if(email!==confirmEmail){
            alert("emails no matchy match!")
        }
        const payload = {
            firstName,
            lastName,
            middleInitial,
            email,
            phoneNumber,
            anotherPhoneNumber,
            address,
            addressLineTwo,
            zipCode,
            city,
            stateOrProvince
        }
        console.log(payload)
    }
    const handleChecked = event => {
        console.log(event.target.checked)
    }
    
    return  (
        <div className="container">
            
            <h2>Section 1 - General Information</h2>
            <hr />
            <div>Complete all the sections and submit the completed form. If you have any questions, contact the Department of Housing and Community Development at (800) 952-8356.</div>
            
            
            <form>
                
               {props.children}
                <Row>
                    <OneInput name="Last Name" type="lastName" size="4" handleChange={setLastName} value={lastName}/>
                    <OneInput name="First Name" type="firstName" size="4"handleChange={setFirstName} value={firstName}/>
                    <OneInput name="Middle Initial" type="middleInitial" size="4"handleChange={setMiddleInitial} value={middleInitial}/>
                </Row>
                <LineBreak height="25px"/>
                <Row>
                
                    <OneInput name="Email" type="email" size="6"handleChange={setEmail} value={email}/>
                    <OneInput name="Confirm Email" type="confirmEmail" size="6"handleChange={setConfirmEmail} value={confirmEmail}/>
                    
                </Row>
                
                <p>Please enter your Email if you would like to receive a copy of this complaint submission.</p>
                <LineBreak height="25px"/>
                <Row>
                    
                    <OneSelect options={phoneNumberOptions} name="Phone Type"/>
                    <OneInput name="Phone Number" type="phoneNumber" size="6" handleChange = {setPhoneNumber} value={phoneNumber}/>
                    <OneCheckBox 
                    text="Add another phone number" 
                    type="addAnotherPhoneNumber" 
                    checked={anotherPhoneNumberBool} 
                    handleChange = {()=>setAnotherPhoneNumberBool(!anotherPhoneNumberBool)}
                    />

                    {anotherPhoneNumberBool ? /*conditionally render extra phone inputs iff checkbox is checked*/
                    <> 
                    <OneSelect options={phoneNumberOptions} name="Phone Type"/>
                    <OneInput name="Phone Number" type="phoneNumber" size="6" handleChange={setAnotherPhoneNumber} value={anotherPhoneNumber}/>
                    </> 
                    : ""}

                </Row>

                <LineBreak height="40px"/>
                <h2>Physical Location of Home</h2>
                <hr />
                <p>Location locked to California Mobilehome locations only.</p>


                <Row>
                <OneInput name="Address Number and Street (No P.O. Box accepted)" type="address" size="6" value={address} handleChange={setAddress}/>
                </Row>
                <LineBreak height="25px" />

                <Row>
                <OneInput name="Address Line 2" type="addressLineTwo" size="6" value={addressLineTwo} handleChange={setAddressLineTwo}/>
                </Row>
                <LineBreak height="25px" />

                <Row>
                <OneInput name="Zip Code" type="zipCode" size="6" value={zipCode} handleChange={setZipCode}/>
                </Row>
                <LineBreak height="25px" />

                <Row>
                <OneInput name="City" type="city" size="6" value={city} handleChange={setCity}/>
                </Row>
                <LineBreak height="25px" />

                <Row>
                <OneInput name="State/Province" type="stateOrProvince" size="6" value={stateOrProvince} handleChange={setStateOrProvince}/>
                </Row>
                <LineBreak height="25px" />

                <button type="submit" className="btn btn-primary" onClick = {handleSubmit}>Submit</button>
            </form>
            
        </div>
    )
}