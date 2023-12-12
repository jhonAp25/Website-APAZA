import React, { useState } from 'react'

import trama_fondo from '../assets/images/trama_fondo.png';
import { Link, useParams } from 'react-router-dom'
import database from '../database/bd.json'
import '../assets/styles/productPage.css'

import ColorSection from '../components/ColorSection';
import TallaSection from '../components/TallaSection';
import Button from '../components/Button';
import ButtonAmount from '../components/ButtonAmount';
import Test from '../components/Test';

const ProductPage = () => {

    let params =  useParams()
    const [product , setProductCategory] = useState( database.filter(dat => dat.id === parseInt( params.id) ))
    const [quantity , setQuantity] = useState(1)
    const [colorSelectd , setColorSelected]= useState(product[0].color[0].nombre)
    const [tallaSelected, setTallaSelected] = useState("S")

    
    
    const [productDetails  , setProductDetails] =useState()


    const addCart=(id, color, cantidad, talla)=>{
        setProductDetails({
            "id": id, 
            "color": color,
            "talla": talla,
            "cantidad" : cantidad
        })

       
    }


    
  return (

    <>
        <div className='content_category'>
            <h1 className='title_category'>{params.category}</h1>  
        </div>

        <div className='content_main grid'>
            <div className='container_product_selected'>
                <img className='fondo_product_selected' src={trama_fondo} alt="" srcSet="" />
            
                <img className='image_product_selected' src={product[0].image} alt="" sizes="" srcSet="" />
            
            </div>

            <div className='content_info'>
                <div className='content_title_info'>
                    <span className='title_info'>{product[0].modelo}</span>
                    <span className='description_info'>{product[0].descripcion}</span>
                </div>

                <div className='content_precio'>
                    <div className='precio_num'>
                        <span>Normal</span>
                        <span className='precio_normal' style={{ fontWeight: "200" }} >S/ {product[0].precio + 10}.00 PEN</span>
                    </div>
                    <div className='precio_num'>
                        <span>Internet</span>
                        <span className='precio_inter'>S/ {product[0].precio}.00 PEN</span>
                    </div>
                    <div className='precio_num'>
                        <span>Descuento</span>
                        <span className='precio_desc'>- {product[0].precio} %</span>
                    </div>
                </div>

                <div className='content_color'>
                    <ColorSection color={product[0].color} colorSelectd={colorSelectd} setColorSelected={setColorSelected} />
                  
                </div>

                <div className='content_talla'>
                   <TallaSection talla={product[0].talla} tallaSelected={tallaSelected} setTallaSelected={setTallaSelected}  />
                </div>

                <div className='content_buttons'>
                    <ButtonAmount quantity={quantity} setQuantity={setQuantity} />
                    <Link to={ "/" + params.category } > 
                    <Button name={"Añadir a Carrito"} eventClick={()=>addCart(product[0].id , colorSelectd , quantity, tallaSelected ) } /></Link>
                    
                </div>
            </div>  
        </div>


        <Test/>

    </>
  )
}

export default ProductPage