import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    firstNameChange,
    selectFirstName
} from "./formSlice"
import OneInput from './OneInput';
export default function Form(props) {
    const [dontRevealIdentity, setDontRevealIdentity] = useState(false);
    const firstName = useSelector(selectFirstName);
    const dispatch = useDispatch();
    const handleSubmit = event => {
        
    }
    const handleChecked = event => {
        console.log(event.target.checked)
    }
    
    return  (
        <div className="container">
            
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <h2>Section 1 - General Information</h2>
            <div id="edit-section-1-general-information--description" class="webform-element-description">Complete all the sections and submit the completed form. If you have any questions, contact the Department of Housing and Community Development at (800) 952-8356.</div>
            <form>
                
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dontRevealIdentity" value = {false} onChange = {handleChecked} />
                    <label className="form-check-label" for="exampleCheck1">I request that HCD does not reveal my identity to my mobilehome park owner or operator.<br/><br/></label>
                </div>
                
                

            <div className="row">
                <OneInput name= "Last Name" type="lastName" size="4" />
                <OneInput name="First Name" type="firstName" size="4"/>
                <OneInput name="Middle Initial" type="middleInitial" size="4"/>
                <OneInput name="Email" type="email" size="6"/>
                <OneInput name="Confirm Email" type="confirmEmail" size="6"/>
                
            </div>
            <p>Please enter your Email if you would like to receive a copy of this complaint submission.</p>
            <div className="row">
                <div className="col-md-6">
                    <label for="phone-type" className="">Phone type</label>
                    <select class="form-select" aria-label="Phone type">
                        
                        <option selected>- None -</option>
                        <option value="Alternate">Alternate</option>
                        <option value="Business">Business</option>
                        <option value="Fax">Fax</option>
                        <option value="Home">Home</option>
                        <option value="Other">Other</option>
                        <option value="Work">Work</option>
                    </select>
                </div>


                </div>
                <button type="submit" className="btn btn-primary" onClick = {handleSubmit}>Submit</button>
                </form>
            
        </div>
    )
}