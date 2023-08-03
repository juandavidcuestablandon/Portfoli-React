import perfil from "../multimedia/fotoperfil.jpg"
import {useTranslation} from  "react-i18next"


const MainHome = () => {
  const {t} = useTranslation();
  return (
    
    <section>
              <div>
            <h1>{t('mainhome.title')}</h1>
            <h2>{t('mainhome.subtitle')}</h2>
            <p>Juan David Cuesta</p>
        </div>

        <div>
            <div className="box">
              <img src={perfil} alt="fotouser" />
              <span className="circle-spin"></span>
            </div>
            
            <div className="redes">
                <a href="www.linkedin.com/in/juan-david-cuesta5"><i className='bx bxl-linkedin'></i></a>
                <a href="https://www.instagram.com/juandavidc.b/"><i className='bx bxl-instagram' ></i></a>
                <a href="https://github.com/juandavidcuestablandon"><i className='bx bxl-github' ></i></a>
                <a href="#"></a>
            </div>
        </div>
 
    </section>  
    
  



  )
}

export default MainHome