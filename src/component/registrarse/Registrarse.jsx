import { Grid, Typography } from '@mui/material'
import React from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import axios from 'axios';

export const Registrarse = ({
    setShowRegister, 
    setShowLogin, 
    user, 
    password,
    onChangeUser,
    onChangePassword
}) => {
    const sendRegister = (e) =>{
        e.preventDefault()
        if(user === "" || password === ""){
        alert("Debes completar todos los campos")
        }else{
         axios.post('http://localhost:3005/login/createUser', {
          user: user,
          password: password,
          
         }).then((resp)=>{
          alert("Felicidades ya tienes tu cuenta!!!!!")
          setShowRegister(false)
          setShowLogin(true)
         }).catch((err)=>{
          console.log(err)
         })
        }
      }
      const regresar = ()=>{
         setShowLogin(true)
         setShowRegister(false)
      }
  

  return (
    <Grid container>
      <Grid item md={12} xs={12} textAlign={'center'} color={'white'} mt={3} mb={5}>
        <Typography variant='h2'>Registrarse</Typography>
      </Grid>
      <Grid item md={4} xs={12} color={'white'} textAlign={'center'} style={{backgroundColor:'#27b1bf', margin:'auto', height:'350px', borderRadius:'10px'}}>
    <Typography variant='h4'>Registrate!</Typography>
    <p style={{fontSize:'20px'}}>Si aun no tienes cuenta, puedes registrarte aqui!</p>
      <TextField id="user" label="Usuario" variant="outlined"   onChange={onChangeUser} /><br />
      <TextField id="password" type="password" label="contraseña" variant="outlined" onChange={onChangePassword} /><br />
      <Button size="small" color="success"  variant="outlined" onClick={(e)=>{sendRegister(e)}}>Crear Cuenta</Button>
        <Button size="small" color="error"  variant="outlined" onClick={()=>{regresar()}}>Regresar</Button>
  </Grid>
    </Grid>
  )
}
