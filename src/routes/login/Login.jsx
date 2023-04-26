import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Registrarse } from '../../component/registrarse/Registrarse';
import axios from 'axios';
 const Login = ({
  getDataAllowed
 }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  
 
  const onChangeUser = (event) => { setUser(event.target.value)} 
  const onChangePassword = (event) => { setPassword(event.target.value)} 
  
  const register = ()=>{
    setShowLogin(false)
    setShowRegister(true)
  }

  const inicioSesion = () =>{
    if(user === "" || password === ""){
      alert("Debes completar todos los campos")
    }else{
       axios.post('http://localhost:3005/login', {
        user: user,
        password: password
       }).then((res)=>{
         getDataAllowed(res.data)
         navigate('/clientes')
         setShowLogin(false) 
       }).catch((err)=>{
         console.log(err)
        alert("Usuario no existe :(")
       })
    }
  }

   const navigate = useNavigate()

  return( 
 <Grid container>
  {
    showLogin &&
    <Grid container>
     <Grid item md={12} xs={12} color={'white'} textAlign={'center'} mt={2} mb={5}>
    <Typography variant='h1'>Login </Typography>
     </Grid>
     <Grid item md={4} xs={12} color={'white'} textAlign={'center'} style={{backgroundColor:'#27b1bf', margin:'auto', height:'350px', borderRadius:'10px'}}>
    <Typography variant='h4'>Inicia sesion</Typography>
    <p style={{fontSize:'20px'}}>Para poder ver las solicitudes inicia sesion y si no tienes una cuenta puedes regisrarte.</p>
      <TextField id="user" label="Usuario" variant="outlined"   onChange={onChangeUser} /><br />
      <TextField id="password" type="password" label="contraseña" variant="outlined" onChange={onChangePassword} /><br />
      <Button size="small" color="success"  variant="outlined" onClick={()=>{inicioSesion()}}>
          Iniciar secion
        </Button>
        <Button size="small" color="primary" variant="outlined" onClick={()=>{register()}}>
          Registrarse
        </Button>
     </Grid>
    </Grid>
  }
  {
    showRegister &&
  
      <Registrarse
       setShowLogin={setShowLogin}
       setShowRegister={setShowRegister}
       user={user}
       password={password} 
       onChangeUser={onChangeUser} 
       onChangePassword={onChangePassword}
      />

  }
 </Grid>
  )
}

export default Login;