import React, { useState } from 'react'
import { FilteredList } from './FilteredList';
import { useDispatch } from 'react-redux'
import "./Style.css"
import { searchProduct } from '../../store/cardsSlice';
import {useAppDispatch} from '../../store/hook'
import { IconSearch } from '@tabler/icons-react';


interface SearchProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<SearchProps> = ({ active, setActive }) => {
  const [value, setValue] = useState<string>("")

  const dispatch = useAppDispatch();

  const search: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const searchValue = e.target.value
    setValue(searchValue)
    dispatch(searchProduct(searchValue))
  }

  return (
    <div className={active ? "modal active" : "modal" } onClick={()=> setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content" } onClick={(e)=> e.stopPropagation()}>
        <div className='search-container' style={{marginBottom: 20}}>
          <IconSearch stroke={1} />
          <input 
            className='searchInput' 
            type='text' 
            placeholder='Search' 
            value={value} 
            onChange={search}
          />
        </div>
         <FilteredList />
      </div>
    </div>
  )
}

export { Modal } 
