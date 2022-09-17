import React from 'react';
import {Link} from 'react-router-dom'
function Home(){

return (
    <>
      <section className='heading'>
        <h1>Which Action Do you want to perfrom?</h1>
        <p>Please choose an Option</p>
      </section>

      <Link to='/register' className='btn btn-reverse'>
        Create a User
      </Link>

      <Link to='/myusers' className='btn btn-reverse'>
        View My Users
      </Link>

     
    </>
  )
}


export default Home;