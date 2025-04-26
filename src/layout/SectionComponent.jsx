import CardProduct from "../components/CardProduct"
import "../assets/styles/section.css"
import Button from "../components/Button"

export const SectionComponent =({orientacion})=>{
    return (
        <div className={`content_section  ${orientacion ? "rigth"  : ""} `} >
            <div className="section_content_text">
                <span className="text_title"> Diseño que se mueve contigo  </span>
                <div className="content_section_text">
                    <span className="text_descripcion">
                    Ropa moderna, cómoda y con actitud. Diseñamos cada prenda para acompañarte en cada paso, desde lo casual hasta lo elegante. Viste con confianza, vive con estilo.
                    Nuestros diseños no solo se ven bien, se sienten bien. Usamos materiales de alta calidad y cortes pensados para adaptarse a tu ritmo. Porque cada día es distinto, y tu ropa debería seguirte el paso, sin límites ni incomodidades.
                    </span>
                    <div className="content_btn">
                        <Button name="Descubrir ahora" eventClick={()=>alert("hola")} />
                        <Button name="Guía de tallas" eventClick={()=>alert("hola")} secondary={true} />
                    </div> 
                </div>
            </div>
               

            <div className="section_content_image">
                <CardProduct/>
            </div>
        </div>
    )
}

