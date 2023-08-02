import ProjectContent from "./ProjectContent"
import filmfinder from "../multimedia/filmfinder.jpg"
import trivia from "../multimedia/trivialgenius.jpg"

const Projects = () => {

  return (
    <>
        <div className="projects">
            <h2>PROYECTOS</h2>
            <div className="proyectsContent">
               <ProjectContent 
               link={'https://filmfinderjd.netlify.app'}
               img={filmfinder}
               description={'Aplicación de catalogo de películas  desarrollada con JavaScript Vanilla HTML CSS '}
               git={'https://github.com/juandavidcuestablandon/film_finder'}
               />

                <ProjectContent 
               link={'https://trivialgenius.netlify.app/'}
               img={trivia}
               description={'Juego de Preguntas Desarrollado con React'}
               git={'https://github.com/juandavidcuestablandon/Trivial-Genius'}
               />

                <ProjectContent 
               link={'hola'}
               img={'#'}
               description={'lorem29'}
               />
               
                <ProjectContent 
               link={'hola'}
               img={'#'}
               description={'lorem29'}
               />
               
            </div>
        </div>
    </>
  )
}

export default Projects