import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import './Inicio.css'
import { NavLink } from 'react-router-dom';
 const Inicio = () => {
  return (
    <Grid container>
        <Grid item md={12} xs={12} textAlign={'center'} color={'white'} mt={5} mb={5}>
           <Typography variant='h1'>Julian Hurtado</Typography>
           <h1>Freelancer</h1>
           <Typography variant='h5'>Diseño y Desarrollo Web Freelancer</Typography>
        </Grid>
        <Grid item md={12} xs={12} textAlign={'center'} color={'white'} margin={'auto'}>
          <FmdGoodIcon sx={{ fontSize: 80 }}/>
          <p>Cali, Colombia</p>
          <NavLink to={'/contacto'} style={{fontSize:'25px', color:'white'}}>Contactame</NavLink>
        </Grid>
    </Grid>
  )
}
export default Inicio