import React from 'react'

function Button({
  type, 
  action = () => {}, 
  className, 
  icon = undefined, 
  label = undefined,
  disabled
}) {
  return (
    <button
        type={type}
        onClick={action}
        className={className}
        disabled={disabled}
    >
        {icon}
        {label}
    </button>
  )
}

export default Button