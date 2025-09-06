import React, { useContext, useState } from 'react'
import Box from './Box'
import Text from './Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartContext } from '../context/CartContext';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import Counter from './Counter';

function Cart() {

       const { cart, totalQuantity, setCart } = useContext(CartContext);
       const [showModal, setShowModal] = useState(false)
       const [paymentStatus, setPaymentStatus] = useState('idle')

       const totalAmount = cart.reduce((acc, item) => acc + (item.prod.amount * item.quantity), 0)

       const handlePayment = async () => {
           setPaymentStatus('processing')
           
           setTimeout(() => {
               setPaymentStatus('success')
               alert('¡Pago realizado con éxito!')
               
               setTimeout(() => {
                   setPaymentStatus('idle')
                   setShowModal(false)
                   setCart([])
               }, 1000)
           }, 2000)
       }

       const getButtonText = () => {
           switch (paymentStatus) {
               case 'processing': return 'Procesando...'
               case 'success': return '¡Pagado!'
               default: return 'Pagar'
           }
       }

       const getButtonClass = () => {
           switch (paymentStatus) {
               case 'processing': return 'btn btn__primary btn__processing'
               case 'success': return 'btn btn__primary btn__success'
               default: return 'btn btn__primary'
           }
       }

 return (
   <>
       <Box className="cart__container" role="button" onClick={() => setShowModal(true)}>
           <FontAwesomeIcon icon={faShoppingCart} size="xl" />
           <Box className="cart__badge" >
               <Text as="span">
                   {totalQuantity}
               </Text>
           </Box>
           <Modal show={showModal} closeModal={() => setShowModal(false)}>
               <Text as="h3">Productos Agregados</Text>
               {
                   cart.map(
                       ({prod, quantity}) =>
                           <Box key={prod.id} className="d-flex align-center space-between">
                               <Text as="h4">{prod.name}</Text>
                               <Counter product={prod}/>
                               <Text as="b">{`$ ${prod.amount * quantity}`}</Text>
                           </Box>
                   )
               }
               <Box className="d-flex align-center space-between">
                   <Text as="h4">Total:</Text>
                   <Box className="d-flex align-center">
                       <Text as="b" className="mr-3">{`$ ${totalAmount}`}</Text>
                       <button 
                           type="button" 
                           className={getButtonClass()}
                           disabled={cart.length === 0 || paymentStatus === 'processing'}
                           onClick={handlePayment}
                       >
                           {getButtonText()}
                       </button>
                   </Box>
               </Box>
           </Modal>
       </Box>
   </>
 )
}

export default Cart