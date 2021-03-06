import './checkout-item.styles.scss';

import { useContext } from 'react';
import { CardContext } from '../../contexts/card.contex';

const CheckoutItem = ({ cardItem }) => {
  const { name, imageUrl, price, quantity } = cardItem;
  const { clearItemFromCard, addItemToCard, removeItemToCard } =
    useContext(CardContext);
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItemToCard(cardItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemToCard(cardItem)}>
          &#10095;
        </div>
      </span>

      <span className='price'>${price}</span>
      <div
        onClick={() => clearItemFromCard(cardItem)}
        className='remove-button'
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
