import styles from './OrderSummary.scss';
import React from 'react';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';


const OrderSummary = ({tripCost, options}) => (
  
  <h2 className={styles.component}> Total: <strong>  {formatPrice(calculateTotal(tripCost, options))}</strong> </h2>// --psuje strone, poprawic trza
  
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};
export default OrderSummary;


