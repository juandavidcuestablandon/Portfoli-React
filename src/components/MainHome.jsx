import perfil from "../multimedia/fotoperfil.jpg"


const MainHome = () => {
  return (
    
    <section>
              <div>
            <h1>DESARROLLADOR</h1>
            <h2>FONTEND</h2>
            <p>Juan David Cuesta</p>
        </div>

        <div>
            <div className="box">
              <img src={perfil} alt="fotouser" />
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