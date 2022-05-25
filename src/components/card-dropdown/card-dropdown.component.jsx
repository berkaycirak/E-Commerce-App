import './card-dropdown.styles.scss';
import Button from '../button/button.component';
const CardDropdown = () => {
  return (
    <div className='card-dropdown-container'>
      <div className='card-items'></div>
      <Button>Go To CHECKOUT</Button>
    </div>
  );
};

export default CardDropdown;
