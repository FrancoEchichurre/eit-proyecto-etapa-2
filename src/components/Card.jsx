import React from 'react'
import Box from './Box'
import Text from './Text'
import Counter from './Counter'

function Card({
  image,
  name,
  largeDescription,
  amount,
  ...restProps
}) {
  
  return (
    <Box 
      className='card'
      style={{
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)'
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)'
      }}
    >
      <img src={image} alt={name} />
      
      <Box className='card__content m-6'>
        <Box>
          <Text as='h3'>{name}</Text>
          <Text>{largeDescription}</Text>
        </Box>
        
        <Box className='card__price'>
            <Box className='d-flex justify-center w-100'>
                <Counter 
                    product={{
                        image,
                        name,
                        largeDescription,
                        amount,
                        ...restProps
                    }}
                />
            </Box>
          <hr className='w-100'/>
          <Text as='b'>{`$ ${amount}`}</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Card