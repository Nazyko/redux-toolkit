import React from 'react'
import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, Button } from '@mantine/core';
import './Style.css';


interface CardItemProps {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

const CardItem: React.FC<CardItemProps> = ({id, title, discountPercentage, price, thumbnail}) => {

  return (
    <div className='card'>
      <img className='card-image' src={thumbnail}/>
      <div className='section'>
        <p>{title}</p>
        <p>-{discountPercentage}%</p>
        <p>${price}</p>
      </div>
      <div className='button-container'>
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className='like' stroke={1.5} />
        </ActionIcon>
      </div>
    </div>
  )
}

export { CardItem }


