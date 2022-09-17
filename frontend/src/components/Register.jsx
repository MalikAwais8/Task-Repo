import React from 'react';
import { useState } from 'react'
import axios from "axios";

function Register(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      })
    const { name, email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
      const onSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name :formData.name,
            eamil:formData.email,
            password:formData.password
        }
        axios.post('http://localhost:5000/register', newUser)
      }

    return (
        <>
          <section className='heading'>
            <h1>
               Register
            </h1>
            <p>Enter Details to Create a User</p>
          </section>
    
          <section className='form'>
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  value={name}
                  onChange={onChange}
                  placeholder='Enter your name'
                  autoComplete='off'
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={email}
                  onChange={onChange}
                  placeholder='Enter your email'
                  autoComplete='off'
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={password}
                  onChange={onChange}
                  placeholder='Enter password'
                  autoComplete='off'
                  required
                />
              </div>
              <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register