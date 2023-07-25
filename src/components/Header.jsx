import  React, { useState } from "react"
const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
        <div>
            <h2 className="logo">JD.</h2>
        </div>
        <div>
            <ul className={`navbar ${isOpen && "open"}`}>
                <li><a href="#home">INICIO</a></li>
                <li><a href="#projects">PROYECTOS</a></li>
                <li><a href="#about">ACCERCA DE MI</a></li>
                <li><a href="#contact">CONTACTA ME </a></li>
            </ul>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ ()  => setIsOpen(!isOpen)} >
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
    </header>
  )
}

export default Header