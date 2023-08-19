import React from "react"
import './Error.css'
import { Link } from 'react-router-dom'
function ErrorPage(){
    return(
        <div class='error'>
            <h1>Erro!</h1>
            <div class='linkdiv'>
                <Link class='link' to='/'>Voltar a página inicial</Link>
            </div>
        </div>
    )
};

export default ErrorPage