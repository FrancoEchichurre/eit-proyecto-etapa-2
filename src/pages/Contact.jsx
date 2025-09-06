import React from 'react'
import Container from '../components/Container'
import Form from '../components/Form'
import Text from '../components/Text'
import { useForm } from '../hooks/useForm'
import { postContact } from '../utils/api'
import Box from '../components/Box'

const inputValidations = {
   name:{
     validation: value => value.length > 2,
     errorText: "El nombre debe tener más de 2 caracteres"
   },
   email:{
     validation: value =>{
       const regexp = new RegExp(/\S+@\S+\.\S+/);
       return regexp.test(value);
     },
     errorText: "El email no es válido"
   },
   subject:{
     validation: value => value.length > 2,
     errorText: "El asunto debe tener más de 2 caracteres"
   },
   message: {
     validation: value => value.length > 2,
     errorText: "El mensaje debe tener más de 2 caracteres"
   }
 }

function Contact() {
 
   const { values, errors,  onChange } = useForm({
     name: '', 
     email: '',
     subject: '',
     message: ''
   }, inputValidations)

   const handleSubmit = e => {
     e.preventDefault()
     if (Object.values(errors).every( val => !val )) {
       postContact(values)
       .then(() => alert("¡Mensaje enviado con éxito!"))
       .catch( err => console.error(err) )

     } else {
       console.log("Hay errores en el formulario")
     }
   }

   return (
     <Container as='main'>
       <Text as='h2'>Contactanos</Text>
       <Box className='grid'>
         <Box className='col-xs-12 col-md-6 col-lg-5 col-xl-4'>
       <Form
           values={values}
           errors={errors}
           onChange={onChange}
           onSubmit={handleSubmit}
           inputsArray={[
             {
                 name: 'name',
                 type: 'text',
                 label: 'Tu Nombre *'
             },
             {
                 name: 'email',
                 type: 'email',
                 label: 'Email de contacto *'
             },
             {
                 name: 'subject',
                 type: 'text',
                 label: 'Asunto referido *'
             },
             {
                 name: 'message',
                 type: 'textarea',
                 label: 'Dejanos tu mensaje *',
                 id: 'message'
             }
           ]}
           />
             </Box>
           </Box>
     </Container>
   )
}

export default Contact