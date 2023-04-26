
import { Grid } from '@mui/material'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './routes/inicio/Inicio'
import {Navegador} from './component/nav/Navegador'
import SobreMi from './routes/sobreMi/SobreMi'
import Contactos from './routes/contactos/Contactos'
import Clientes from './routes/clientes/Clientes'
import Login from './routes/login/Login'
import { ProtectedRoute } from './component/protectedRoute/ProtectedRoute'
import { useState } from 'react'
import Logaut from './component/logaut/Logaut'
function App() {
 const [isAllowed, setIsAllowed] = useState(false);
 const [idsolicitudes, setIdSolicitudes] = useState("");
 const [nombre, setNombre] = useState("");
 const [correo, setCorreo] = useState("");
 const [telefono, setTelefono] = useState("");
 const [Solicitud, setSolicitud] = useState("");
 const [comentario, setComentario] = useState("");
 const changeNombre = (event) => {setNombre(event.target.value)};
 const changeCorreo = (event) => {setCorreo(event.target.value)};
 const changeTelefono = (event) => {setTelefono(event.target.value)};
 const changeSolicitud = (event) => {setSolicitud(event.target.value)};
 const changeComentario = (event) => {setComentario(event.target.value)};
 const getDataAllowed = (value)=>{
  if(value === ""){
    setIsAllowed(false)
  }else{
    setIsAllowed(true)
  }
};
  return (
    <Grid container>
      <BrowserRouter>
      <Navegador />
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/sobre-mi' element={<SobreMi />}></Route>
          <Route path='/contacto' element={<Contactos 
            nombre={nombre}
            setNombre={setNombre}
            correo={correo}
            setCorreo={setCorreo}
            telefono={telefono}
            setTelefono={setTelefono}
            Solicitud={Solicitud}
            setSolicitud={setSolicitud}
            comentario={comentario}
            setComentario={setComentario}
            changeNombre={changeNombre}
            changeCorreo={changeCorreo}
            changeTelefono={changeTelefono}
            changeSolicitud={changeSolicitud}
            changeComentario={changeComentario}
          />}></Route>
          <Route path='clientes' element={<ProtectedRoute isAllowed={isAllowed}/>}>
          <Route path='/clientes' element={<Clientes
             nombre={nombre}
             setNombre={setNombre}
             correo={correo}
             setCorreo={setCorreo}
             telefono={telefono}
             setTelefono={setTelefono}
             Solicitud={Solicitud}
             setSolicitud={setSolicitud}
             comentario={comentario}
             setComentario={setComentario}
             changeNombre={changeNombre}
             changeCorreo={changeCorreo}
             changeTelefono={changeTelefono}
             changeSolicitud={changeSolicitud}
             changeComentario={changeComentario}
             idsolicitudes={idsolicitudes}
             setIdSolicitudes={setIdSolicitudes}
          />}></Route>
          </Route>
          <Route path='/login' element={<Login 
           getDataAllowed={getDataAllowed} 
           isAllowed={isAllowed} 
           setIsAllowed={setIsAllowed}
          />}></Route>
        </Routes>
        {
         isAllowed &&
      
           <Logaut  setIsAllowed={ setIsAllowed}/>
        
     }
      </BrowserRouter>
    </Grid>
  )
}

export default App
