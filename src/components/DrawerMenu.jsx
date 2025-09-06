import React, { useEffect } from "react"
import { createPortal } from "react-dom"
import Box from './Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

function DrawerMenu({
   show,
   closeMenu,
   children
}) {
   
   useEffect(() => {
       if (show) {
           document.body.style.overflow = 'hidden'
       } else {
           document.body.style.overflow = 'unset'
       }
       
       return () => {
           document.body.style.overflow = 'unset'
       }
   }, [show])

   return (
       show ?
           createPortal(
               <Box className="drawer__overlay" role="button" onClick={closeMenu}>
                   <Box className="drawer" onClick={(e) => e.stopPropagation()}>
                       <button className="drawer-button" onClick={closeMenu}>
                           <FontAwesomeIcon icon={faClose} />
                       </button>
                       {children}
                   </Box>
               </Box>,
               document.body
           )
       : null
   )
}

export default DrawerMenu