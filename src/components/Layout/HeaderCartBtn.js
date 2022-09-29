import {useContext} from 'react'
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartBtn.module.css';

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);

  const numsOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numsOfCartItems}</span>
    </button>
  );
}
 
export default HeaderCartBtn;