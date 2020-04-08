import React from 'react';

import './App.css';
import {Button,Form , FormGroup,Input,Label} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';

function App() {
  return (
    <Form className="App">
      <h1>
         <span className="font-weight-bold ml-5 pl-3">myForm</span>
      </h1>
      <h2 className="text-center">Welcome</h2>
      <FormGroup>
       <Label>Name</Label>
       <Input type="text" placeholder="Name"></Input>
      </FormGroup>
      <FormGroup>
       <Label>Branch</Label>
       <Input type="text" placeholder="Branch"></Input>
      </FormGroup>
      <FormGroup>
       <Label>Email</Label>
       <Input type="email" placeholder="Email"></Input>
      </FormGroup>
      <FormGroup>
      <Label>RollNo</Label>
      <Input type="text" placeholder="RollNo"></Input>
     </FormGroup>
      
      <Button className="btn-lg btn-dark btn-block" onClick={addToLocaStorage}>Submit</Button>
    </Form>
  );
}
function addToLocaStorage(){
const inputs=document.querySelectorAll('input');
const name=inputs[0].value;
const branch=inputs[1].value;
const email=inputs[2].value;
const roll=inputs[3].value;
localStorage.setItem(name,branch);
localStorage.setItem(email,roll);
window.location.reload();

}

export default App;
