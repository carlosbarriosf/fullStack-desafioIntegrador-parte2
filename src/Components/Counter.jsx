
import Button from './Button'
import { FaMinus, FaPlus } from 'react-icons/fa6'

function Counter({quantity, increment, decrement}) {


    return (
      <div className='counter'>
          <Button
              type='button'
              action={decrement}
              className='counter__control'
              icon={<FaMinus />}
          />
          <div className='counter__quantity'>
              {quantity}
          </div>
          <Button 
              type='button'
              action={increment}
              className='counter__control'
              icon={<FaPlus />}
          />
      </div>
    )
}

export default Counter