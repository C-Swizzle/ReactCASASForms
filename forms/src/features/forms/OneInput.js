import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function OneInput(props){
    const [formInput, changeFormInput]      = useState("");

    return(
        
            <div className={`form-group col-md-${props.size}`}>
                    <label for={props.type}>{props.name}</label>
                    <input type={props.type} className="form-control" id={props.type} value={formInput} onChange = {event => changeFormInput(event.target.value)}/>
            </div>
        
    )
}