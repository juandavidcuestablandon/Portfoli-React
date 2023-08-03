import PageHome from "./components/PageHome"
import Projects from "./components/Projects"
import About from "./components/About"
import './styles.css'
import Contact from "./components/Contact"
import {useTranslation} from   "react-i18next"
function App() {

const {t , i18n} = useTranslation();
  return (
    <> 
     
      <div id="home">
      <PageHome  />
      </div>

      <div id="projects">
      <Projects />
      </div>

      <div id="about">
      <About />
      </div>
      <div id="contact">
      <Contact/>
      </div>

    </>
  )
}

export default App
