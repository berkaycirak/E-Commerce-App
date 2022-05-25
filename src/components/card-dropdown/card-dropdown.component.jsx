import './card-dropdown.styles.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContext } from '../../contexts/card.contex';
import Button from '../button/button.component';
import CardItem from '../card-item/card-item.component';
const CardDropdown = () => {
  const { cardItems } = useContext(CardContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <div className='card-dropdown-container'>
      <div className='card-items'>
        {cardItems.map((item) => (
          <CardItem key={item.id} cardItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Go To CHECKOUT</Button>
    </div>
  );
};

export default CardDropdown;
