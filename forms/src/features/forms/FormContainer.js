import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import OneCheckBox from './OneCheckBox';

export default function FormContainer(props) {
    const [dontRevealIdentityBool, setDontRevealIdentityBool] = useState(false);
    return(
        <div className="container">
            <OneCheckBox 
                text="I request that HCD does not reveal my identity to my mobilehome park owner or operator." 
                type="dontRevealIdentity"
                checked={dontRevealIdentityBool}
                handleChange={()=>{setDontRevealIdentityBool(!dontRevealIdentityBool)}}
                />
            {!dontRevealIdentityBool ? <Form /> : ""}
        </div>

    )

}