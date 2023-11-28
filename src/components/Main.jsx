import React, { useState } from 'react'
import {main} from '../assets/styles/main.css';
import SeccionCategoryProduct from './SeccionCategoryProduct';
import database from  "../database/bd.json"

const Main = () => {

const [products , setProducts] = useState(database)


const countCategory =(jsonObj, propiedad)=> {
  var frecuenciaCategorias = {};

  // Obtener un array de valores de la propiedad especificada
  var valoresPropiedad = Object.values(jsonObj).map(obj => obj[propiedad]);

  // Utilizar map para contar la frecuencia de cada categoría
  valoresPropiedad.forEach(valor => {
    frecuenciaCategorias[valor] = (frecuenciaCategorias[valor] || 0) + 1;
  });

  // Crear un array de objetos con la estructura { categoria, frecuencia }
  var categoriasFrecuentes = Object.entries(frecuenciaCategorias).map(([categoria, frecuencia]) => ({ categoria, frecuencia }));

  return categoriasFrecuentes;
  
}

var categoriasRepetidas = countCategory(products, 'category');


  return (
    <div style={{background : "#6DA69F" }}>

   
        <div className='content_main' >

          { categoriasRepetidas.map(d =>(
                <SeccionCategoryProduct title={d} data={products} />
          )) }

      
            



        </div>
    </div>
  )
}

export default Main