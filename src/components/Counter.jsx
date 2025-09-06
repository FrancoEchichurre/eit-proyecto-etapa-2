import React, { useContext, useEffect, useState } from 'react'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CartContext } from '../context/CartContext';

import Box from './Box';
import Text from './Text';
import Cart from './Cart';

function Counter({
   product
}) {

   const { cart, setQuantity } = useContext(CartContext);
   const prodInCart = cart.find( ({prod}) => prod.id === product.id )
   const [counter, setCounter] = useState(
       prodInCart?.quantity || 0  
   );

   useEffect(() => {
       if (prodInCart && prodInCart.quantity !== counter) {
           setCounter(prodInCart.quantity)
       }
       if (!prodInCart && counter) {
           setCounter(0)
       }
   }, [cart])

   const handleIncrement = () => {
       setCounter(counter + 1);
       setQuantity(product, counter + 1);
   }

   const handleDecrement = () => {
       setCounter(counter - 1);
       setQuantity(product, counter - 1);
   }

 return (
   <Box className="d-flex align-center">
       <button 
           type='button' 
           className='btn btn__primary' 
           onClick={handleDecrement} 
           disabled={counter === 0}
       >
           <FontAwesomeIcon icon={faMinus} />
       </button>
       <Text as="strong" className='ml-5 mr-5'>{counter}</Text>
       <button 
           type='button' 
           className='btn btn__primary' 
           onClick={handleIncrement}
       >
           <FontAwesomeIcon icon={faPlus} />
       </button>
   </Box>
 )
}

export default Counter