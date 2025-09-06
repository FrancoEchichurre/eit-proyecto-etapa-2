import React, { useEffect } from "react"
import { createPortal } from "react-dom"
import Box from './Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

function Modal({
   show,
   closeModal,
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
               <Box className="modal__overlay" role="button" onClick={closeModal}>
                   <Box className="modal__content" onClick={(e) => e.stopPropagation()}>
                       <button className="modal__close-button" onClick={closeModal}>
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

export default Modal