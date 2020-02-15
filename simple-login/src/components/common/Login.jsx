import React, { useState } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';


const LoginForm = props => {
    const [login, setLogin] = useState({});

    const handleChange = (evt) => {
        evt.preventDefault();
        setLogin({
            ...login,
            [evt.target.name]: evt.target.value
        })
    }
    console.log(login);
  return (
    <div className='login'>
      <div className='container'>
        <div className='login-wrapper'>
          <h1>Login here</h1>
          <Form>
            <FormGroup>
                <div >
              <Label for='exampleEmail'className="col-25">Email</Label>
              <div className="col-75">
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Email'
                onChange={handleChange}
              /></div>
              </div>
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword' className="col-25">Password</Label>
              <div className="col-75">
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Enter Password'
                onChange={handleChange}
              /></div>
            </FormGroup>
            
<br/>
            
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
