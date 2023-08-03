import AboutContent from "./AboutContent"
import Habities from "./Habities"
import {useTranslation} from   "react-i18next"
const About = () => {

  const {t} = useTranslation();
  return (
    <div className="about">
        <h2>{t('acercademi.title')}</h2>
         <AboutContent 
            title={t('acercademi.for')}
            text1={t('acercademi.text1')}
            text2={t('acercademi.text2')}
            text3={t('acercademi.text3')}
            text4={t('acercademi.text4')}
            
            year1={'2023'}
            year2={'2021'}
            year3={'2021'}
            year4={'2016'}

         />
       
        <Habities
         />
        <AboutContent 
            title={t('acercademi.experienciaT')}
            text2={t('acercademi.experienciatext1')}
            text3={t('acercademi.experienciatext2')}
            year2={t('acercademi.time')}
            year3={'2022-2023'}
        

         />

        
        
    </div>
  )
}

export default About