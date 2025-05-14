import ColorSection from '../components/ColorSection';
import TallaSection from '../components/TallaSection';
import Button from '../components/Button';
import ButtonAmount from '../components/ButtonAmount';
import  IconLogo  from '../assets/icons/IconLogo.svg';
import trama_fondo from '../assets/images/trama_fondo.png';
import { useState } from 'react';
import { ImageZoom } from './ImageZoom';



export const CardProductSale =({product})=>{
    
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


    return(
        <div className='background_product_sale'>
        <div className=' grid content '>
            <div className='container_product_selected'>
                
            
                <img className='image_product_selected' src={product[0].image} alt="" sizes="" srcSet="" />
                <ImageZoom  src={product[0].image}  zoom={5} />
            
            </div>

            <div className='content_info'>

                <div className='content_title_info'>
                    <div className='text'>
                        <span className='title_info'>{product[0].modelo}</span>
                        <span className='description_info'>{product[0].descripcion}</span>
                    </div>
                    <div className='logo_marca'>
                        <img src={IconLogo} alt="" srcset="" width={65} />
                    </div>
                </div>

                <div className='content_precio'>
                    <span>{product[0].precio.toFixed(2)}</span>
                </div>

                <div className='content_talla'>
                    <TallaSection talla={product[0].talla} tallaSelected={tallaSelected} setTallaSelected={setTallaSelected}  />
                </div>
                


                <div className='content_color'>
                    <ColorSection color={product[0].color} colorSelectd={colorSelectd} setColorSelected={setColorSelected} />
                
                </div>
                <div className='content_cant'>
                    <ButtonAmount quantity={quantity} setQuantity={setQuantity} />
                </div>
        
                <div className='content_buttons'>
                
                    {/* <Link to={ "/" + params.category } >  */}
                        <Button name={"Añadir a Carrito"} eventClick={()=>addCart(product[0].id , colorSelectd , quantity, tallaSelected ) } />
                    {/* </Link> */}
                    
                </div>
            </div>  
    </div>
    </div>
    )
}