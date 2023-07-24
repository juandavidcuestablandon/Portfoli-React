import PageHome from "./components/PageHome"
import Projects from "./components/Projects"
import About from "./components/About"
import './styles.css'
import Contact from "./components/Contact"

function App() {


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
