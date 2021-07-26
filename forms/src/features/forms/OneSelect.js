import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function OneInput(props){
    const [formInput, changeFormInput]      = useState("");

    return(
        <div className={props.size ? `col-md-${props.size}` : "col-md-6"}>
                    <label for={props.type} className="">{props.name}</label>
                    <select class="form-select" aria-label={props.type}>
                        <option selected>- None -</option>
                        
                        {props.options.map((value,index)=>(/* dynamically creates all options for dropdown*/
                            <option value={value} index={index}>{value}</option>
                        ))}
                        
                    </select>
        </div>
        
    )
}