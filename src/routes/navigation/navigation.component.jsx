import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import './navigation.styles.scss';
import { CardContext } from '../../contexts/card.contex';
import { signOutUser } from '../../utilities/firebase/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CardDropdown from '../../components/card-dropdown/card-dropdown.component';
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCardOpen } = useContext(CardContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CardIcon />
        </div>
        {isCardOpen && <CardDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
