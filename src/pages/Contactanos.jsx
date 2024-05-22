import React, { useState } from 'react'
import Form from '../Components/Form'
import { useForm } from '../hooks/useForm'
import InputGroup from '../Components/InputGroup'
import { validateString } from '../assets/validations'
import { postComment } from '../assets/api'
import Footer from '../Components/Footer'


const INITIAL_STATE = {
  userName: '',
  userMail: '',
  comment: ''
}

function Contactanos() {
    
  const { values, handleInputChange, resetForm} = useForm(INITIAL_STATE)

  const [loadingForm, setLoadingForm] = useState(false)

  const [messageVisible, setMessageVisible] = useState(false)

  const [className, setClassName] = useState('opacityIncrease')
  
  const inputProps= {
    userName: {
      type: 'text',
      label: 'Nombre *',
      required: true,
      validation: validateString(values['userName'], /^[A-Za-z ]{5,40}$/),
      errorMessage: 'El campo debe contener entre 5 y 40 caracteres alfabéticos'
    },
    userMail: {
      type: 'email',
      label: 'E-mail de contacto *',
      required: true,
      validation: validateString(values['userMail'], /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
      errorMessage: 'La dirección de e-mail ingresada no coincide con un formato correcto'
    },
    comment: {
      type: 'textarea',
      label: 'Comentarios *',
      required: true
    }
  }

  return (
    <div className='container home'>
      <Form
        onSubmit={() => {
          const validArray = Object.entries(inputProps).map(([key, props]) => {
            return (props.validation)
          })
          if(validArray.indexOf(false) === -1) {
            setLoadingForm(true)
            postComment(values)
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
            alert('El formulario no se ha enviado porque hay campos con errores')
          }
        }}
        className='form container'
        title='Envianos tu comentario'
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
        {messageVisible ? <div className={`emergent-msg ${className}`}>Comentario enviado con éxito</div> : undefined}
        <Footer />
    </div>
    )
}

export default Contactanos