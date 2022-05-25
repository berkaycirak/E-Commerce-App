import './card-dropdown.styles.scss';
import { useContext } from 'react';
import { CardContext } from '../../contexts/card.contex';
import Button from '../button/button.component';
import CardItem from '../card-item/card-item.component';
const CardDropdown = () => {
  const { cardItems } = useContext(CardContext);
  return (
    <div className='card-dropdown-container'>
      <div className='card-items'>
        {cardItems.map((item) => (
          <CardItem key={item.id} cardItem={item} />
        ))}
      </div>
      <Button>Go To CHECKOUT</Button>
    </div>
  );
};

export default CardDropdown;
