import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function OneCheckBox(props) {
    return(
        <div className="form-check col-md-12">
                    <input type="checkbox" className="form-check-input" id={props.type} onChange = {props.handleChange} checked={props.checked}/>
                    <label className="form-check-label" for={props.type}>{props.text}</label>
        </div>
    )
}