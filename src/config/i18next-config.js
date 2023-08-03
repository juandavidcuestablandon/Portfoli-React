import i18n from 'i18next';
import { initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    lng : 'es',
    fallbackLng : 'es',
    resources : {
       es : {
         "translation" : { 
            "header": {
               "inicio" : "INICIO",
               "proyectos" : "PROYECTOS",
               "acercademi": "ACERCA DE MI",
               "contacto" : "CONTACTA ME",
               
            }, 
            "mainhome" : {
               "title" : "DESARROLLADOR",
               "subtitle" :"FRONTEND",
            },
            "proyectos" : {
              "title" : "PROYECTOS",
              "prouno": "Aplicación de catalogo de películas desarrollada con JavaScript Vanilla HTML CSS" ,
             "prodos" : "Juego de Preguntas Desarrollado con React y CSS",
             "protres" : "Tienda online de zapatillas desarrollada con React , Bootstrap, CSS y  JavaScript",
            },
            "acercademi" : {
               "title" : "ACERCA DE MI",
               'for' : "FORMACIONES", 
               "text1": "Desarrollo de Aplicaciones Web, Frontend- Cifo L'Hospitalet",
               "text2": "Desarrollo de Aplicaciones Web, Full-Stack-Netmind",
               "text3": "Soporte TI, Google- Coursera",
               "text4": "Bachillerato-Nuestra Señora del Rosario",
               "experienciaT" : "EXPERIENCIA",
               "experienciatext1" : "Practicas - Indian web",
               "experienciatext2" : "Auxiliar  Administrativo- Fundación Cepaim",
               "time": '6 meses -2022'
            },

            "habilidades" : {
               "title" : "HABILIDADES",
            },

            "contacto" : {
               "title" : "CONTACTA ME", 
               "nom" : "Ingresa Tu Nombre:",
               "ape" : "Ingresa Tu Apellido:",
               "email" : "Ingresa Tu Email:",
               "mensaje" : "Ingresa Un Mensaje:",
               "button" : "Enviar"
            }

         

            
         }  
       }, 
       
       en : {

        "translation" : { 
          "header" : {
            "inicio" : "HOME",
               "proyectos" : "PROJECTS",
               "acercademi": "ABOUT ME",
               "contacto" : "CONTACT",
         },
         "mainhome" : {
            "title" : "FRONT END",
            "subtitle" :"DEVELOPER",
         },
         "proyectos" : {
            "title" : "PROJECTS",
            "prouno": "Movie catalog application developed with JavaScript Vanilla HTML CSS",
            "prodos" : "Quiz Game Developed with React and CSS",
            "protres" : "Online sneaker store developed with React, Bootstrap, CSS and JavaScript",
         },
         "acercademi" : {
            "title" : "ABOUT ME",
            'for' : "STUDIES", 
            "text1": "Web Application Development, Frontend- Cifo L'Hospitalet",
            "text2": "Web Application Development, Full-Stack-Netmind",
            "text3": "IT Support, Google-Coursera",
            "text4": "High School-Nuestra Señora del Rosario",
            "experienciaT" : "EXPERIENCE",
            "experienciatext1" : "Internship-Indian web",
            "experienciatext2" : "Administrative Assistant-Fundación Cepaim",
            "time": '6 months -2022'
         },
         "habilidades" : {
            "title" : "SKILLS",
         }, 
         "contacto" : {
            "title" : "CONTACT", 
            "nom" : "Your Name:",
            "ape" : "Your Last Name:",
            "email" : "Your Email:",
            "mensaje" : "Enter A Message:",
            "button" : "SEND"
         }



       }

    }
}});