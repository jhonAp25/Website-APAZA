import React from 'react'
import navbar from '../assets/styles/navbar.css';
import { AiOutlineMenu } from "react-icons/ai";
import { CiShoppingCart , CiSearch} from "react-icons/ci";
import { IconLogo } from '../assets/icons/IconLogo.js';


const NavBar = () => {
  return (
    <div className='content_navbar' >
        <div>
            <AiOutlineMenu size={25} color='#fff' />
        </div>

        <div>
            <IconLogo></IconLogo>
        </div>
        

        <div className='icons_left'>
            <CiShoppingCart size={25} color='#fff' />
            <CiSearch size={25} color='#fff' />
        </div>

    </div>
  )
}

export default NavBar