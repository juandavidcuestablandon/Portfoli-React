import ProjectContent from "./ProjectContent"
import filmfinder from "../multimedia/filmfinder.jpg"
import trivia from "../multimedia/trivialgenius.jpg"
import {useTranslation} from   "react-i18next"

const Projects = () => {
  const {t} = useTranslation();
  return (
    <>
        <div className="projects">
            <h2>{t('proyectos.title')}</h2>
            <div className="proyectsContent">
               <ProjectContent 
               link={'https://filmfinderjd.netlify.app'}
               img={filmfinder}
               description={t('proyectos.prouno')}
               git={'https://github.com/juandavidcuestablandon/film_finder'}
               />

                <ProjectContent 
               link={'https://trivialgenius.netlify.app/'}
               img={trivia}
               description={t('proyectos.prodos')}
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