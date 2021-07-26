import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Form() {
    return  (
        <div className="container">
            
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            
            <form>
                
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dontRevealIdentity"/>
                    <label className="form-check-label" for="exampleCheck1">I request that HCD does not reveal my identity to my mobilehome park owner or operator.</label>
                </div>
                
                

            <div className="row">
                <div className="form-group col-md-4">
                    <label for="lastName">Last Name</label>
                    <input type="lastName" className="form-control" id="lastName" value=""/>
                    
                </div>
                <div className="form-group col-md-4">
                    <label for="firstName">First Name</label>
                    <input type="firstName" className="form-control" id="firstName"/>
                </div>
                <div className="form-group col-md-4">
                    <label for="middleInitial">Middle Initial</label>
                    <input type="middleInitial" className="form-control" id="middleInitial"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </form>
            
        </div>
    )
}