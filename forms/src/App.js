import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Form from "./features/forms/Form"
import FormContainer from './features/forms/FormContainer';
import Login from './features/forms/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jwtAuthToken, setJwtAuthToken] = useState("");
  const [user, setUser] = useState("");

  return (
    <div className="App">

      {/*Bootstrap CDN link*/}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>

      <div className="text-right">
        {
          !isLoggedIn ?
            <>
              <div className="row">
                <div className="col-md-8">{/* intentionally left blank for spacing */}</div>
                <div className="col-md-4">
                  <Login
                    setLogin={setIsLoggedIn}
                    setAuthToken={setJwtAuthToken}
                    setUser={setUser}
                  />
                </div>
              </div>
            </>
            : <div className="text-success">Logged in as <span className="font-weight-bold" >{user}</span> </div>
        }
      </div>

      <FormContainer />
    </div>
  );
}

export default App;
