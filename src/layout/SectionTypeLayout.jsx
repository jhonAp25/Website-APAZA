import background from "../assets/images/background_wood.png"
import bg_short from "../assets/images/bg_short.png"
import bg_polera from "../assets/images/bg_polera.png"
import bg_jogger from "../assets/images/bg_jogger.png"
import  "../assets/styles/sectionType.css"
import { CardType } from "../components/CardType"
import { Link } from "react-router-dom"

export const SectionTypeLayout =()=>{
    return (
        <div className="content_type">
          
            <div className=" content_card_type content">
                <Link to={"/short"} >
                    <CardType name={"SHORT"}  bg={bg_short} />
                </Link>

                <Link to={"/polo"} >
                    <CardType name={"POLERA"} bg={bg_polera} /> 
                </Link>

                <Link to={"/buzo"} >
                    <CardType name={"jogger"} bg={bg_jogger} />
                </Link>
            </div>
        </div>
    )
}