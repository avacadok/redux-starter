import React, { useState } from 'react';
//useDispatch is used to modify values of states
import { useDispatch } from 'react-redux';
import { login, logout } from "../features/user";

function Login() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  
  return (
    <div>
      <form>
        <input type={'name'} 
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}>
        </input>

        <input type={'age'} 
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          value={age}>
        </input>

        <input type={'email'} 
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}>
        </input>

      </form>
      <button onClick={() => {
        dispatch(login({ name: name, age: age, email: email }))
      }}>
        Log in
      </button>

      <button onClick={() => {
        dispatch(logout())
      }}>
        Logout
      </button>
    </div>
  )
}

export default Login;