import React, { useState } from 'react'
import axios from 'axios'

function Loginform({changeState}) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")


  const sendLogin = (e) => {
    e.preventDefault();
    let email = email;
    let senha = senha;
    
    try {
      const response = axios.post("localhost:3001/login", {email, senha})
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form className='formLogin'>
        <label htmlFor="email">Email</label>
        <input 
            type="email"
            id='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email} 
        />
        <label htmlFor="password">Password</label>
        <input 
            type="password"
            id='senha'
            name='senha'
            onChange={(e) => setSenha(e.target.value)}
            value={senha} 
        />
        <label htmlFor='opcao'>Uso</label>
        <select name='opcao' id='opcao'>
          
          <option value="cliente">Cliente</option>
          <option value="vendedor">Vendedor</option>
        </select>
        <button 
            type="submit" 
        >
            Login  
        </button>
    </form>
  )
}

export default Loginform