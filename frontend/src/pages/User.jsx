import React, { useState } from 'react'
import Loginform from '../components/Loginform'
import RegisterForm from '../components/RegisterForm'

function User() {
  const [login,setLogin] = useState(true)
  const changeState = ()=>{
    setLogin(!login);
  }
  return (
    <>
      {
        login? <Loginform changeState={changeState}/>: <RegisterForm changeState={changeState}/>
      }
      <button onClick={changeState}>Mudar</button>
    </>
  )
}

export default User