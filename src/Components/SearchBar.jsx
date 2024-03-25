
import { FaMagnifyingGlass } from 'react-icons/fa6'


function SearchBar({value, action}) {

  return (
    <div className='searchBar'>
        <FaMagnifyingGlass size={20} />
        <input 
          type="search" 
          placeholder='Buscar en la tienda' 
          value={value} 
          onChange={action}
        />
    </div>
  )
}

export default SearchBar