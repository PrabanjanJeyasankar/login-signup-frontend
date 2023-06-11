import React, { Component } from 'react'

class SignUpComponent extends Component {
  render() {
    return (
        <form>
          <h3>Sign Up</h3>
          <div className='mb-3'>
          </div>

          <div className='mb-3'>
            <label>First Name</label>
            <input
            type='text'
            className='form-control'
            placeholder='Enter your First Name'
            required/>
          </div>

          <div className='mb-3'>
            <label>Last Name</label>
            <input
            type='text'
            className='form-control'
            placeholder='Enter your Last Name'
            required/>
          </div>

          <div className='mb-3'>
            <label>Email</label>
            <input
            type='email'
            className='form-control'
            placeholder='Enter your Email'
            required/>
          </div>

          <div className='mb-3'>
            <label>Password</label>
            <input
            type='password'
            className='form-control'
            placeholder='Password'
            required/>
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>Sign up</button>
          </div>
          <p className='forgot-password text-right'>
            Already Registered? <a href='/login'>Sign-in Here</a>
          </p>
        </form>   
        )
  }
}

export default SignUpComponent