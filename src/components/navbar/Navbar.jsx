import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';  //importing icons
import logo from '../../assets/logo.svg';
import './navbar.css'; 

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">OpenAI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)
//using BEM --> Block Element Modifier --> CSS naming convention
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); /*toggleMenu --> var letting us know are we currently showing the mobile menu or not, setToggleMenu --> function allowing us to change the variable*/
  return (
    <div className = "gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      {/* Adding mobile menu */}
      <div className='gpt3__navbar-menu'>
        {/* We will want to use some dynamic states so, we need to import useState from React*/}
        {/* toggleMenu = if true --> ?, = else false --> :*/}
        {toggleMenu
          ? <RiCloseLine color= "#fff" size={27} onClick = {() => setToggleMenu(false)}/> 
          : <RiMenu3Line color= "#fff" size={27} onClick = {() => setToggleMenu(true)}/> 
        }
        {/* && --> only if toggleMenu is true then*/}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar