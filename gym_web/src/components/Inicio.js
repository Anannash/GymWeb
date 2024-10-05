import React, { useState } from 'react'

export const Inicio = () => {

    const [numControl,setNumControl] = useState();
    const [contrasena,setContrasena] = useState();

  

  return (
    <div>
        <h1>Inicio de Sesion</h1>
        
        <p><input type="text" onChange={e => setNumControl(e.target.value)} placeholder='Pon tu numero de control'></input></p>
        <p><input type="password" onChange={e => setContrasena(e.target.value)} placeholder="Pon tu contrasena"></input></p>
        <button>Iniciar Sesion</button>

    </div>
  )
}
