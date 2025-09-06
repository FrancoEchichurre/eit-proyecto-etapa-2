import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import Box from '../components/Box'
import Container from '../components/Container'
import Text from '../components/Text'

function Footer() {
 return (
   <Box as='footer' className='footer__container $footer-bg'>
       <Container className='footer__wrapp'>
           <Text as='h4'>Jugueteria Cosmica</Text>
           <Text as='span'>Copyright © 2025 Todos los derechos reservados.</Text>
           <Box>
               <FontAwesomeIcon className='footer__socialmedia-links' icon={faFacebook} />
               <FontAwesomeIcon className='footer__socialmedia-links' icon={faInstagram} />
               <FontAwesomeIcon className='footer__socialmedia-links' icon={faYoutube} />
           </Box>
       </Container>
   </Box>
 )
}

export default Footer