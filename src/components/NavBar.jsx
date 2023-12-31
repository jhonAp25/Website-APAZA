import React from 'react'
import navbar from '../assets/styles/navbar.css';
import { AiOutlineMenu } from "react-icons/ai";
import { CiShoppingCart , CiSearch} from "react-icons/ci";
import  IconLogo  from '../assets/icons/IconLogo.svg';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='content_navbar' >
        <div>
            <AiOutlineMenu size={27} color='#fff' />
        </div>

        <div style={{ marginLeft: "45px"}}>
            <NavLink to={"/"}> <img src={IconLogo} alt="" srcset="" width={65} /></NavLink>
        </div>
        

        <div className='icons_left'>
            <CiShoppingCart size={27} color='#fff' />
            <CiSearch size={27} color='#fff' />
        </div>

    </div>
  )
}

export default NavBar