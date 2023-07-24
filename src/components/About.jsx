import AboutContent from "./AboutContent"
import Habities from "./Habities"
const About = () => {
  return (
    <div className="about">
        <h2>ACCERCA DE MI</h2>
         <AboutContent 
            title={'FORMACIONES'}
            text1={"Desarrollo de Apliciones Web, Frontend-Cifo L'Hospitalet"}
            text2={"Desarrollo de Apliciones Web, Full-Stack-Netmind"}
            text3={"Soporte TI, Google- Coursera"}
            text4={'Bachillerato-Nuestra Señora del Rosario'}
            
            year1={'2023'}
            year2={'2021'}
            year3={'2021'}
            year4={'2016'}

         />
       
        <Habities
         />
        <AboutContent 
            title={'EXPERIENCIA'}
            text2={"Practicas - Indian web"}
            text3={'Administrativo- Fundación Cepaim'}
            year2={'6 MESES-2022'}
            year3={'2022-2023'}
        

         />

        
        
    </div>
  )
}

export default About