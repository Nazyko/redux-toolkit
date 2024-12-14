import axios from "axios";
import { CardItem } from '../carditem/CardItem';
import { useAppSelector } from "../../../store/hook";
import { Link } from "react-router-dom";

const CardList: React.FC = () => {
    const cards = useAppSelector((state)=> state.cards.list)
    
    return (
        <>
            { cards ? 
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 15, marginTop: 25, marginBottom: 25}}>
                    {cards.map(card => (
                        <Link className="card" key={card.id} to={`/${card.id}`}>
                            <CardItem 
                                id={card.id}
                                thumbnail={card.thumbnail} 
                                discountPercentage={card.discountPercentage}
                                title={card.title}
                                price={card.price}
                            />
                        </Link>
                        
                    ))}
                </div> : <h1> Not found :( </h1>
            }
        </>
    )
}

export { CardList }
