
import { useState , useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

// import Visibility from '@mui/icons-material/Visibilit';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
FormsControl.propTypes = {
    option: PropTypes.object,
    lista: PropTypes.array,
    setLista: PropTypes.func,
   
  };
export default function FormsControl({option, setLista, lista}) {

    const [active, setActive] = useState(3);

    useEffect(()=>{
        if( active<3){
           console.log("envoando la data...", active, option);
        fetch(`https://sbs-hulkapitest.dda.sodimac.cl:3090/granel/${option.tienda}/${active}`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response.activo);
          const elementos = lista.map((la) => {
            if(la.tienda === option.tienda){
              la.activo = active
            }
            return la;
          });
          setLista(elementos);
        })
        .catch((err) => console.error(err));
       }else console.log("no se envio nada");
      
    }, [ active, setLista]);

    const currencies = [
        {
          value: 1,
          label: 'Activada',
        },
        {
          value: 0,
          label: 'Desactivada',
        },
      ];
      


     const estatoConverter = (status)=>{
        if(status) return 1;
        return 0;
     }

    const selectionChange = (e)=>{
        e.preventDefault();
        const number = estatoConverter(e.target.value);
        setActive(number);
        console.log(number);
        console.log(`mandando al estado un ${e.target.value}`);
        // setEstado(e.target.value);
        

    }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 4, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Estado actual"
          value={active}
          helperText="Desactivar o activar"
          onChange={ selectionChange }
        >
          {currencies.map((option) => (
           
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}