import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <div>
      <p className={classes.PriceLabel}>Total Price:</p>
      <p className={classes.Price}><strong>${props.price.toFixed(2)}</strong></p>
    </div>

    {controls.map(ctrl => (
      <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <button 
      className={classes.OrderButton} 
      disabled={!props.purchaseable} 
      onClick={props.ordered}>{props.isAuth ? 'Order Now' : 'Sign-up to order'}</button>
  </div>
);

export default buildControls;