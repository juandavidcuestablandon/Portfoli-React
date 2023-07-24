import html from "../multimedia/logostec/html-5.png"
import javascript from "../multimedia/logostec/secuencia-de-comandos-de-java.png"
import css from "../multimedia/logostec/css-3.png"
import react from "../multimedia/logostec/react-icon.svg.png"
import git from "../multimedia/logostec/github.png"



const Habities = () => {
  return (
    <div className="box">
        <h3>HABILIDADES</h3>
        <div className="habilities">
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={javascript} alt="JAVASCRIPT" />
            <img src={react} alt="REACT" />
            <img src={git} alt="GITHUB" />
            
        </div>
    </div>
  )
}

export default Habities