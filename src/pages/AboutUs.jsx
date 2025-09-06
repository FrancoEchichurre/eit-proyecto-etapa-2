import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import './AboutUs.scss' 

function AboutUs() {
 return (
   <Container as='main'>
     <div className="about-us">
       <Text as='h1' className="about-us__title">
         Nuestra Trayectoria
       </Text>
       
       <Text as='h2' className="about-us__subtitle">
         Explorando el universo desde 2019
       </Text>
       
       <Text as='p' className="about-us__intro">
         Juguetería Cósmica nació del sueño de despertar la curiosidad espacial en los niños, 
         combinando diversión y aprendizaje sobre el cosmos.
       </Text>

       <div className="about-us__timeline">
         <div className="timeline-item">
           <Text as='h3' className="timeline-item__title">
             🚀 Los Inicios (2019)
           </Text>
           <Text as='p' className="timeline-item__content">
             María fundó la juguetería inspirada por sus sobrinos fascinados con el espacio. 
             Comenzó con la idea de crear juguetes que despertaran curiosidad por las estrellas.
           </Text>
         </div>

         <div className="timeline-item">
           <Text as='h3' className="timeline-item__title">
             🌟 Crecimiento (2020-2022)
           </Text>
           <Text as='p' className="timeline-item__content">
             Abrimos con 15m² y telescopios para niños. Crecimos hasta incluir juegos educativos, 
             sets espaciales y talleres de "Pequeños Astronautas".
           </Text>
         </div>

         <div className="timeline-item">
           <Text as='h3' className="timeline-item__title">
             💫 Era Digital (2023)
           </Text>
           <Text as='p' className="timeline-item__content">
             Lanzamos la tienda online con realidad aumentada, llevando la experiencia cósmica 
             a hogares de todo el país.
           </Text>
         </div>

         <div className="timeline-item">
           <Text as='h3' className="timeline-item__title">
             🌍 Presente (2024-2025)
           </Text>
           <Text as='p' className="timeline-item__content">
             Somos un centro de inspiración científica con más de 2,000 productos únicos 
             y una comunidad de 5,000 pequeños astronautas.
           </Text>
           <Text as='p' className="timeline-item__highlight">
             ✨ Primera juguetería espacial del país ✨ Alianzas con museos ✨ 10,000+ niños impactados
           </Text>
         </div>

         <div className="timeline-item">
           <Text as='h3' className="timeline-item__title">
             🚀 Futuro
           </Text>
           <Text as='p' className="timeline-item__content">
             Seguimos inspirando a futuros científicos y soñadores. El universo es infinito, 
             y también lo son las posibilidades de aprender jugando.
           </Text>
         </div>
       </div>
     </div>
   </Container>
 )
}

export default AboutUs