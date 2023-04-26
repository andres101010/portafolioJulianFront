import { Grid, Typography } from '@mui/material';
import React from 'react'
import { TextField, Button, FormControl, FormLabel } from "@mui/material";
import axios from 'axios';
import TextareaAutosize from '@mui/base/TextareaAutosize';
 const Contactos = ({
  nombre,
  setNombre,
  correo,
  setCorreo,
  telefono,
  setTelefono,
  Solicitud,
  setSolicitud,
  comentario,
  setComentario,
  changeNombre,
  changeCorreo,
  changeTelefono,
  changeSolicitud,
  changeComentario,
 }) => {
  console.log(nombre, correo, telefono, Solicitud, comentario)
  const handleSubmit = () => {
    
    if(nombre === "" ||
       correo === "" ||
       telefono === "" ||
       Solicitud === "" ||
       comentario === ""){
          alert("Debes completar todos los campos")
       }else { 
        axios.post('http://localhost:3005/contact/newSolicitud',{
        nombre:nombre,
        correo:correo,
        telefono:telefono,
        solicitud: Solicitud,
        comentario: comentario
       }).then((resp)=>{
          setNombre("")
          setCorreo("")
          setTelefono("")
          setSolicitud("")
          setComentario("")
          alert("Mandado con exito!!!!!")
       })
      }
    }

  return (
    <Grid container>
      <Grid item color={'white'} textAlign={'center'} md={12} xs={12} mt={2}>
        <Typography variant='h1'> Contactame </Typography>
      </Grid>
      
      <Grid item md={12} xs={12} textAlign={'center'}>     
                 <form>
                    <FormControl>
                       <FormLabel style={{color:'white', fontSize:'20px'}}>Nombre</FormLabel>
                       <TextField id="filled-basic" label="Nombre" variant="filled" size="normal" onChange={changeNombre} style={{backgroundColor:'white'}}/>
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Correo</FormLabel>
                       <TextField id="filled-basic" label="Correo" variant="filled" size="normal" onChange={changeCorreo} style={{backgroundColor:'white'}}/>
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Telefono</FormLabel>
                       <TextField id="filled-basic" label="Telefono" variant="filled" size="normal"  onChange={changeTelefono} style={{backgroundColor:'white'}}/>
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Solicitud</FormLabel>
                       <TextField id="filled-basic" label="Solicitud" variant="filled" size="normal"  onChange={changeSolicitud} style={{backgroundColor:'white'}}/>
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Comentario</FormLabel>
                       <TextareaAutosize placeholder="Ingresa tu comentario" style={{ width:300, height:90}}  onChange={changeComentario} />;
                       </FormControl>
                 </form>
                       <Button type="submit" variant="outline"  onClick={()=>{ handleSubmit()}} style={{color:'white'}}>Enviar</Button>
              
      </Grid>
    </Grid>
  )
}

export default Contactos;