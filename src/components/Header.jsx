import   { useState } from "react"
import spain from "../multimedia/es.jpg"
import england from "../multimedia/en.jpg"
import {useTranslation} from   "react-i18next"
const Header = () => {

  const {t , i18n} = useTranslation();

  const changeLanguageES = () => {
    i18n.changeLanguage("es")
  }

  const changeLanguageEN = () => {
    i18n.changeLanguage('en');
  }

  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
        <div>
            <h2 className="logo">JD.</h2>
        </div>
        <div>
            <ul className={`navbar ${isOpen && "open"}`}>
                <li><a href="#home">{t('header.inicio')}</a></li>
                <li><a href="#projects">{t('header.proyectos')}</a></li>
                <li><a href="#about">{t('header.acercademi')}</a></li>
                <li><a href="#contact">{t('header.contacto')} </a></li>
                <li><img src={spain} onClick={changeLanguageES} className="bandera" alt={spain} /></li>
                <li><img src={england} alt={england}  onClick={changeLanguageEN} className="bandera"/></li>
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