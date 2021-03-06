import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function OneInput(props){
    //const [formInput, changeFormInput]      = useState("");

    return(
        
            <div className={"form group" + props.size ? `col-md-${props.size}` : "col-md-6"}>
                    <label for={props.type}>{props.name}</label>
                    <input 
                    type={props.type} 
                    className="form-control" 
                    id={props.type} 
                    value={props.value} 
                    onChange = {event => {
                        //changeFormInput(event.target.value)
                        props.handleChange(event.target.value)
                    }}
                    />
            </div>
        
    )
}