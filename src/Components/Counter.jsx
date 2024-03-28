
import Button from './Button'
import { FaMinus, FaPlus } from 'react-icons/fa6'

function Counter({quantity, increment, decrement, counterControlStyle, counterQuantityStyle}) {


    return (
      <div className='counter'>
          <Button
              type='button'
              action={decrement}
              className={counterControlStyle}
              icon={<FaMinus />}
          />
          <div className={counterQuantityStyle}>
              {quantity}
          </div>
          <Button 
              type='button'
              action={increment}
              className={counterControlStyle}
              icon={<FaPlus />}
          />
      </div>
    )
}

export default Counter