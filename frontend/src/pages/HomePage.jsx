import React from 'react'
import Home from "../components/Home"
import ProdutosExemplos from '../data/ProdutosExemplos'

function HomePage() {
  return (
    <>
      <Home produtos= {ProdutosExemplos}/>
    </>
  )
}

export default HomePage