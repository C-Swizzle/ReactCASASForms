import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function LineBreak(props){
    return(
        <div class="row">
            <div class="col-md-12" style={{height:props.height || "10px"}}>
            </div>
        </div>
    )
}