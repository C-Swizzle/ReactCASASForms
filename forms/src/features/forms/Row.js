import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Row(props) {
    return(
    <div className="row">
    {props.children}
    </div>
    )
}