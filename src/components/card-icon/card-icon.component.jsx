import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './card-icon.styles.scss';
import { useContext } from 'react';
import { CardContext } from '../../contexts/card.contex';

const CardIcon = () => {
  const { isCardOpen, setIsCardOpen, cardCount } = useContext(CardContext);

  const handleClick = () => {
    setIsCardOpen(!isCardOpen);
  };
  return (
    <div onClick={handleClick} className='card-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cardCount}</span>
    </div>
  );
};

export default CardIcon;
