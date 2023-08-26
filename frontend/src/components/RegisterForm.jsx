import React from 'react'
import './Form.css'

function RegisterForm({changeState}) {
  return (
        <form className='form'>
            <label htmlFor="name">Nome</label>
            <input type="text" id='nome' name='name'/>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' name='email'/>
            <label htmlFor="password">Senha</label>
            <input type="password" id='password' name='password'/>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id='confirmPassword' name='confirmPassword'/>
            <div onClick={changeState}>Criar Conta</div>
        </form>
  )
}

export default RegisterForm