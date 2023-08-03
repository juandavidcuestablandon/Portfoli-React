import {  useState , useRef} from "react";
import emailjs from '@emailjs/browser';
import {useTranslation} from   "react-i18next"



const Contact = () => {


    const {t} = useTranslation();

    const form = useRef();

    const [data, setData] = useState({
        name :	"",
        last_name : "",
        email : "",
        message : ""
    })

    const [formStatus, setFormStatus] = useState({
        isSubmitted: false,
        isValid: true, 
        message: "" 
    });

    const handleChange = (event) => {
        
        setData({
            ...data,
            [event.target.name] :  event.target.value
        })
    }


    const validateForm = () => {
        const isValid = data.email && data.name && data.last_name && data.message;
        setFormStatus({ ...formStatus, isValid });
        return isValid;
    };




   const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
    
        emailjs.sendForm('service_qqn818n', 'template_1a4jgrb', form.current, 'L8iSNLmby0VrkTCf1')
          .then((result) => {
              console.log(result.text);
              form.current.reset();
              setFormStatus({
                isSubmitted: true,
                isValid: true,
                message: "Mensaje enviado correctamente."
                
            });
            
                      
          }).catch((error) => {
            console.log(error.text);
            setFormStatus({
                isSubmitted: true,
                isValid: false,
                message: "Ocurrió un error al enviar el mensaje. Inténtalo de nuevo más tarde."
          });

      });
      }
    

      

    
  return (
     
        <section className="contact">
             <h2 className="h2">{t('contacto.title')}</h2>
        <form  ref={form} onSubmit={sendEmail}>
            <div>
                <label>
            {t('contacto.nom')} 
             <input type="text"
              placeholder="John "
               name="name" 
               onChange={handleChange}
               />
               
               </label>
            </div>

        <div>
            <label >
            {t('contacto.ape')} 
            <input type="text" 
            placeholder="Doe" 
            name="last_name" 
            onChange={handleChange}/>
            </label>
        </div>

        <div>
        <label >
           {t('contacto.email')} 
              <input type="email" 
              placeholder="johndoe@example.com" 
              name="email" 
              onChange={handleChange}/> 
              </label>
        </div>

        <div>
        <label >
           {t('contacto.mensaje')} 
        <textarea
         name="message" 
         rows={4} cols={40}
         onChange={handleChange} 
         placeholder={t('contacto.mensaje')}
        />
        </label>
       
        </div >

        <div className="btn">
            <button type="submit">{t('contacto.button')}</button>
        
        </div>

        <div>
        {formStatus.isSubmitted && (
          <div className={`message ${formStatus.isValid ? "success" : "error"}`}>
            {formStatus.message}  
            </div>
            )}
        </div>
        </form>
        </section>
       
    
  )
}

export default Contact