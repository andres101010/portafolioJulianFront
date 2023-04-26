import { Grid, Typography } from '@mui/material';
import React from 'react'
import './SobreMi.css'
import julian from '/src/assets/img/julian.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import angular from '/src/assets/img/angular.jpg';
import bootstrap1 from '/src/assets/img/bootstrap1.png';
import css3 from '/src/assets/img/css3.png';
import express from '/src/assets/img/express.png';
import GitHub from '/src/assets/img/GitHub.png';
import html from '/src/assets/img/html (1).png';
import JavaScript from '/src/assets/img/JavaScript.png';
import materialui from '/src/assets/img/materialui.png';
import mysql from '/src/assets/img/mysql.jpg';
import node from '/src/assets/img/node.png';
import php from '/src/assets/img/php.jpg';
import wordpress from '/src/assets/img/wordpress.jpg';
import react from '/src/assets/img/react.png';
import proyecto1 from '/src/assets/img/proyecto1.jpg';
import { NavLink } from 'react-router-dom';
const SobreMi = () => {
  const imagenes = [ 
    {img:angular},
    {img:bootstrap1},
    {img:css3},
    {img:express},
    {img:GitHub},
    {img:html},
    {img:materialui},
    {img:mysql},
    {img:node},
    {img:wordpress},
    {img:react},
    {img:JavaScript},
    {img:php},
   ]
  return (
    <Grid container>
     <Grid item color={'white'} mt={3} md={12} xs={12} textAlign={'center'}>
        <Typography variant='h1'>Sobre m&iacute;</Typography>
     </Grid>
     <Grid item md={4} xs={12} textAlign={'center'}>
       <img src={julian} alt="julian" style={{width:'350px',height:'350px', borderRadius:'10px'}}/>
     </Grid>
     <Grid item color={'white'} md={8} xs={12} textAlign={'center'}>
       <Typography variant='h2'> Hola soy Julian Hurtado</Typography>
       <p style={{fontSize:'20px'}}>
       Soy un desarrollador web freelance con experiencia en la creación de sitios web y aplicaciones web personalizadas. Mi enfoque se centra en la usabilidad y la funcionalidad, y estoy siempre actualizando mis habilidades para asegurarme de que cada proyecto que manejo sea de alta calidad. Si estás buscando un desarrollador web dedicado y apasionado, contáctame para discutir cómo podemos trabajar juntos en tu próximo proyecto.  
       </p>
       <h1>Habilidades:</h1>
       <p>
        {
          imagenes.map((item)=>(
            <img src={item.img} alt='img' key={item.img} style={{width:'50px',height:'50px', borderRadius:'50%', margin:'5px'}}/>
          ))
        }
       </p>
     </Grid>
     <Grid item md={6} xs={12} color={'white'} textAlign={'center'} mt={2}>
      <Typography variant='h2'>Proyecto Realizado:</Typography>
     </Grid> 
     <Grid item md={6} textAlign={'center'}>
     <Card sx={{ width: 400, borderRadius:'10px'  }}>
      <CardMedia
        sx={{ height: 180 }}
        image={proyecto1}
        title="proyect"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Portafolio
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Maquetado con Html, estilo con Css3 y funcionalidad con JavaScript
        </Typography>
      </CardContent>
      <CardActions>
        Link a repositorio:
        <NavLink to={'https://github.com/1113305755/Portafolio-Freelancer'} target='_blank' style={{textDecoration:'none', marginLeft:'10px' }}>Portafolio</NavLink>
      </CardActions>
    </Card>
     </Grid>
    </Grid>
  )
}
export default SobreMi;