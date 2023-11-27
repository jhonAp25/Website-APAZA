import React from 'react'
import navbar from '../assets/styles/navbar.css';
import { AiOutlineMenu } from "react-icons/ai";
import { CiShoppingCart , CiSearch} from "react-icons/ci";
import  IconLogo  from '../assets/icons/IconLogo.svg';


const NavBar = () => {
  return (
    <div className='content_navbar' >
        <div>
            <AiOutlineMenu size={27} color='#fff' />
        </div>

        <div>
            <img src={IconLogo} alt="" srcset="" width={65} />
        </div>
        

        <div className='icons_left'>
            <CiShoppingCart size={27} color='#fff' />
            <CiSearch size={27} color='#fff' />
        </div>

    </div>
  )
}

export default NavBar