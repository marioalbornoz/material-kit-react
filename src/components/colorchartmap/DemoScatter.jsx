import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';
import { Heatmap} from '@ant-design/plots';





export const DemoScatter = (data) => {
  const [unify, setUnify] = useState(false);
  const [ datos, setDatos] = useState([])

  useEffect(() => {
   console.log('====================================');
   console.log(data.data);
   console.log('====================================');
   setTimeout(()=> {
    setUnify(true);
   },10000)
   if (unify) {
     const listado = data.data;
     const listaUnificada = [];
     if(listado.length > 0) {
        listado.forEach((element) => {
            listaUnificada.push({ tienda: element.tienda, zona: 'DefaulZone' });
          });
          console.log('====================================');
          console.log(listaUnificada);
          setDatos(listaUnificada)
          console.log('====================================');
         
        }
   }
  }, [data, unify]);


const config = {
data: datos.length!==0 ? datos : data.data,
    xField: 'zona',
    yField: 'tienda',
    // colorField: 'sku',
    // sizeField: 'sku',
    shape: 'square',
    label: {
      style: {
        fill: '#fff',
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)',
      },
    },
  };

  return data.data.length>0 ? <Heatmap {...config} />: <Skeleton variant="rectangular" width='100%' height={360} />;
}


DemoScatter.propTypes = {
   
    data: PropTypes.array.isRequired,
    // lista: PropTypes.array.isRequired,
    setData: PropTypes.func,
  };
  