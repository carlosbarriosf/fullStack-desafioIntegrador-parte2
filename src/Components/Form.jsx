import React from 'react'
import Button from './Button';

function Form({onSubmit, className, children, title, reset, loading}) {
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
                disabled={loading}
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