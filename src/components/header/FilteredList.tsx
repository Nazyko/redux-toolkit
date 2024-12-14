import React from 'react'
import { useAppSelector } from '../../store/hook';

const FilteredList: React.FC = () => {
  const items = useAppSelector((state) => state.cards.filteredList);

  return (
    <>
      <div>
        {items.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </>
    
  );
};


export { FilteredList } 