import React, { useState } from 'react'
import  Form  from '../Components/Form'
import { useForm } from '../hooks/useForm'
import InputGroup from '../Components/InputGroup'

import { validateAge, validateStgLength, validateString } from '../assets/validations'
import { postProduct } from '../assets/api'
import Footer from '../Components/Footer'




const INITIAL_STATE = {
    name: "",
    price: "",
    stock: "",
    brand: "",
    category: "",
    shortDesc: "",
    longDesc: "",
    freeShipping: false,
    ageFrom: "",
    ageTo: "",
    image: ""
}

function Alta() {
    
    const { values, handleInputChange, resetForm} = useForm(INITIAL_STATE)


    const [loadingForm, setLoadingForm] = useState(false)

    const [messageVisible, setMessageVisible] = useState(false)

    const [className, setClassName] = useState('opacityIncrease')
    
      const inputProps = {
        name: {
          type: 'text',
          label: 'Nombre del producto *',
          required: true,
          validation : validateString(values['name'], /^[A-Za-z ]{3,30}$/),
          errorMessage: 'El campo debe contener entre 3 y 30 caracteres alfabéticos'
        },
        price: {
          type: 'number',
          label: 'Precio *',
          required: true,
          min: 1,
          validation: values['price'] > 0,
          errorMessage: 'El valor indicado debe ser mayor a 0'
        },
        stock: {
          type: 'number',
          label: 'Stock *',
          required: true,
          min: 1,
          validation: values['stock'] > 0 && Number.isInteger(Number(values['stock'])) ,
          errorMessage: 'El valor indicado debe ser un entero mayor a 0'
        },
        brand: {
          type: 'text',
          label: 'Marca',
          validation: values['brand'] ? validateString(values['brand'], /^[A-Za-z0-9 ]{3,30}$/) : true,
          errorMessage: 'El campo debe contener entre 3 y 30 caracteres alfanuméricos'
        },
        category: {
          type: 'text',
          label: 'Categoría *',
          required: true,
          validation : validateString(values['category'], /^[A-Za-z ]{3,30}$/),
          errorMessage: 'El campo debe contener entre 3 y 30 caracteres alfabéticos'
        },
        shortDesc: {
          type: 'text',
          label: 'Descripción Corta *',
          required: true,
          validation: validateStgLength(values['shortDesc'], 15, 60),
          errorMessage: 'El campo debe contener entre 15 y 60 caracteres'
        },
        longDesc: {
          type: 'textarea',
          label: 'Descripción Larga',
          // required: true,
          validation: true
        },
        freeShipping: {
          label: 'Envío sin cargo',
          type: 'checkbox',
          // checked: isChecked,
          className: 'form__row alta__checkbox',
          validation: true
        },
        ageFrom: {
          type: 'number',
          label: 'Edad desde',
          min: 0,
          max: 99,
          validation: validateAge(values['ageFrom'], values['ageTo']),
          errorMessage: 'La edad desde no puede ser mayor que la edad hasta'
        },
        ageTo: {
          type: 'number',
          label: 'Edad hasta',
          min: 0,
          max: 99,
          validation: validateAge(values['ageFrom'], values['ageTo']),
          errorMessage: 'La edad hasta no puede ser menor que la edad desde'
        },
        image: {
          type: 'file',
          label: 'Foto *',
          required: true,
          validation: true
        }
      }

      

    return (
      <div className='container home'>
        <Form
          onSubmit={() => {
            console.log(inputProps['name'].validation)
            const validArray = Object.entries(inputProps).map(([key, props]) => {
              return (props.validation)
            })
            console.log(validArray)
            if(validArray.indexOf(false) === -1) {
              console.log(values)
              setLoadingForm(true)
              postProduct(values)
                .then(data => {
                  console.log(data)
                  setMessageVisible(true)
                  setTimeout(() => {
                      setClassName('opacityDecrease')
                  }, 3000);
                  setTimeout(() => {
                      setMessageVisible(false)
                      setClassName('opacityIncrease')
                  }, 3300);
                })
                .catch(err => console.error(err))
                .finally(() => {
                  setLoadingForm(false)
                  resetForm()
                })
            } else {
              alert("El producto no se ha guardado porque hay campos con errores")
            }
          }}
          className='form container'
          title='Alta de Productos'
          reset={resetForm}
          loading={loadingForm}
        >
          {Object.entries(inputProps).map(([key, props]) => {
            return (
              <InputGroup
                key={key}
                id={key}
                onChange={handleInputChange}
                values={values}
                {...props}
              />
            )
          })}
        </Form>
        {messageVisible ? <div className={`emergent-msg ${className}`}>Producto cargado con éxito</div> : undefined}
        <Footer />
      </div>
    )
}

export default Alta