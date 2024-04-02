import React from 'react'
import Button from './Button';

function Form({onSubmit, className, children, title, reset}) {
  return (
    <form 
        onSubmit={e => {
        e.preventDefault();
        onSubmit();
        }}
        className={className}
    >
        <h1>{title}</h1>
        {children}
        <div className='form__controls'>
            <Button 
                type='submit'
                label='Enviar'
            />
            <Button
                type='reset'
                label='Borrar Formulario'
                action={reset}
            />
        </div>
    </form>
  )
}

export default Form