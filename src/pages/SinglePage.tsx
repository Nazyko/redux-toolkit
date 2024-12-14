import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../store/cardsSlice';
import { useAppSelector, useAppDispatch } from '../store/hook';
import { ProductData } from '../types/type';
import "../styles/SinglePage.css"


const SinglePage = () => {
  const {id} = useParams();
  const [card, setCard] = useState<ProductData | undefined>(undefined);
  const products = useAppSelector((state)=> state.cards.list)
  const dispatch = useAppDispatch();

  useEffect(()=> {
    if (!products.length) {
      dispatch(fetchProducts());
    } else {
      const foundCard = products.find((product) => product.id === Number(id));
      setCard(foundCard);
    }
  }, [id, products, dispatch])
  

  return (
    <div>
      {card ? (
        <div className='card-item'>
          <img className='card-item__img' src={card.thumbnail}/>
          <div className='card-item__text'>
            <p className='card-item__title'>{card.title}</p>
            <p className='card-item__price'>{card.price}</p>
            <button className='card-item__button'>Buy</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default SinglePage

