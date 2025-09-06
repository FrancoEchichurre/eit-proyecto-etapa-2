import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import Box from '../components/Box'
import Form from '../components/Form'
import { useForm } from '../hooks/useForm'
import { postProduct } from '../utils/api'

const validationUpload = {
  name: {
    validation: value => value.length > 2,
    errorText: "El nombre del producto es incorrecto"
  },
  amount: {
    validation: value => value > 0,
    errorText: "El monto debe ser mayor a 0"
  },
  stock: {
    validation: value => value > 0,
    errorText: "El stock debe ser mayor a 0"
  },
  brand: {
    validation: value => value.length > 2,
    errorText: "La marca debe tener más de 2 caracteres"
  },
  category: {
    validation: value => value.length > 2,
    errorText: "La categoría debe tener más de 2 caracteres"
  },
  largeDescription: {
    validation: value => value.length > 10,
    errorText: "La descripción debe tener más de 10 caracteres"
  },
  freeDelivery: {
    validation: value => typeof value === "boolean",
    errorText: "La opción de entrega gratuita es inválida"
  },
  ageFrom: {
    validation: value => value >= 0,
    errorText: "La edad desde debe ser mayor o igual a 0"
  },
  ageTo: {
    validation: value => value > 0,
    errorText: "La edad hasta debe ser mayor a 0"
  },
  image: {
    validation: value => value.length > 5,
    errorText: "La URL de la imagen es inválida"
  }
}

function Upload() {
  const { values, onChange, errors } = useForm({
    name: "",
    amount: "",
    stock: "",
    brand: "",
    category: "",
    largeDescription: "",
    freeDelivery: false,
    ageFrom: 0,
    ageTo: 0,
    image: ""
  }, validationUpload)

  const handleSubmit = e => {
    e.preventDefault()
    if (Object.values(errors).every(val => !val)) {
      console.log('Datos del producto:', values);
      
      postProduct(values)
        .then(() => {
          alert("¡Producto guardado con éxito!");
        })
        .catch(err => {
          console.error('Error al guardar producto:', err);
          alert("Error al guardar el producto");
        });
        
    } else {
      console.log("Hay errores en el formulario")
    }
  }

  return (
    <Container as='main'>
      <Text as='h2'>Alta de Productos</Text>
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
                label: 'Nombre del Producto *'
              },
              {
                name: 'amount',
                type: 'number',
                label: 'Monto *'
              },
              {
                name: 'stock',
                type: 'number',
                label: 'Stock *'
              },
              {
                name: 'brand',
                type: 'text',
                label: 'Marca *'
              },
              {
                name: 'category',
                type: 'text',
                label: 'Categoría *'
              },
              {
                name: 'largeDescription',
                type: 'text',
                label: 'Descripción *'
              },
              {
                name: 'freeDelivery',
                type: 'checkbox',
                label: '¿Entrega gratuita?'
              },
              {
                name: 'ageFrom',
                type: 'number',
                label: 'Edad desde *'
              },
              {
                name: 'ageTo',
                type: 'number',
                label: 'Edad hasta *'
              },
              {
                name: 'image',
                type: 'text',
                label: 'URL de la imagen *'
              },
            ]}
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Upload