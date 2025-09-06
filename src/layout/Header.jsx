import Box from "../components/Box"
import Container from "../components/Container"
import Text from "../components/Text"
import { NavLink } from "react-router-dom"
import brandImage from "../assets/brand-image.png"
import Cart from "../components/Cart"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import DrawerMenu from "../components/DrawerMenu"

function Header() {

   const [openMenuDrawer, setopenMenuDrawer] = useState(false)


 return (
   <header className="navbar__container">
     <Container className="d-flex space-between">
       <NavLink to="/" className="d-flex align-center page-title">
         <img src={brandImage} alt="" className="mr-4"/>
         <Text as="h1">Jugueteria Cosmica</Text>
       </NavLink>
       <Box as="nav" className="navbar__navigation">
         <ul>
           <li><NavLink to="/about-us" className="nav-button">Sobre Nosotros</NavLink></li>
           <li><NavLink to="/upload" className="nav-button">Alta</NavLink></li>
           <li><NavLink to="/contact-us" className="nav-button">Contactanos</NavLink></li>
           <li><Cart /></li>
         </ul>
       </Box>
       <Box className="navbar__menu-mobile">
           <Cart />
           <button className="navbar__menu-button" onClick={() => setopenMenuDrawer(true)}>
             <FontAwesomeIcon icon={faBars} size="xl" />
           </button>
       </Box>
     </Container>
     <DrawerMenu show={openMenuDrawer} closeMenu={() => setopenMenuDrawer(false)} >
       <Box as="nav" className="navbar__navigation">
         <ul>
           <li><NavLink to="/about-us" className="nav-button">Sobre Nosotros</NavLink></li>
           <li><NavLink to="/upload" className="nav-button">Alta</NavLink></li>
           <li><NavLink to="/contact-us" className="nav-button">Contactanos</NavLink></li>
         </ul>
       </Box>
     </DrawerMenu>
   </header>
 )
}

export default Header