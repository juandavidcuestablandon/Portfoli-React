import ProjectContent from "./ProjectContent"
import perfil from "../multimedia/fotoperfil.jpg"

const Projects = () => {

  return (
    <>
        <div className="projects">
            <h2>PROYECTOS</h2>
            <div className="proyectsContent">
               <ProjectContent 
               link={'hola'}
               img={perfil}
               description={'esta aplicacion la desarrolle con react y estuve creando diferentes utilidades y colocando en practica todo lo aprendido'}
               />
                <ProjectContent 
               link={'hola'}
               img={perfil}
               description={'lorem29'}
               />
                <ProjectContent 
               link={'hola'}
               img={perfil}
               description={'lorem29'}
               />
                <ProjectContent 
               link={'hola'}
               img={perfil}
               description={'lorem29'}
               />
               
            </div>
        </div>
    </>
  )
}

export default Projects