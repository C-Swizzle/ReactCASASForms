import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Form from "./features/forms/Form"
import FormContainer from './features/forms/FormContainer';

function App() {
  return (
    <div className="App">

      {/*Bootstrap CDN link*/}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
     
     
     <FormContainer />
    </div>
  );
}

export default App;
