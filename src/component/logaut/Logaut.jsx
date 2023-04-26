import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

 const Logaut = ({ setIsAllowed}) => {
  const cerrarSesion = () => {
    setIsAllowed(false)
    navigate('/')
  }

  const navigate = useNavigate()
  return (
    <Grid container >
     <Grid item margin={"auto"} >
     <Button variant="outlined" color="error" size="large" onClick={()=>{cerrarSesion()}}>Cerrar sesion</Button>
     </Grid>
    </Grid>
  )
}
export default Logaut;