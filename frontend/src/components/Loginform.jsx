import React, { useState } from 'react'

function Loginform({changeState}) {
  const [name, setName] = useState("")
  const [senha, setSenha] = useState("")
  return (
    <form className='formLogin'>
        <label htmlFor="name">Nome</label>
        <input 
            type="text"
            id='name'
            name='name'
            onChange={(e) => setName(e.target.value)}
            value={name} 
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