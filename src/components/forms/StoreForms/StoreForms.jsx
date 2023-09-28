
import { useState , useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

// import Visibility from '@mui/icons-material/Visibilit';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
StoreForms.propTypes = {
    option: PropTypes.object,
    store: PropTypes.array,
    setStore: PropTypes.func,
   
  };
export default function StoreForms({option, setStore, store}) {

    const [active, setActive] = useState(3);

    useEffect(()=>{
        if( active<3){
           console.log("envoando la data...", active, option);
        fetch(`https://sbs-hulkapitest.dda.sodimac.cl:3090/granel/${option.tienda}/${active}`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response.activo);
          const elementos = store.map((la) => {
            if(la.tienda === option.tienda){
              la.activo = active
            }
            return la;
          });
          setStore(elementos);
        })
        .catch((err) => console.error(err));
       }else console.log("no se envio nada");
      
    }, [ active, setStore]);

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