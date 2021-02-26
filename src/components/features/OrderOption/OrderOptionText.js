import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOptionText = ({currentValue, name, setOptionValue}) => (

  <div className={styles.component}>
    <input type="text"
      className={styles.input}
      value={currentValue}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
      name= {name} 
      placeholder={'your name'}
      required
    />

  </div>
);

OrderOptionText.propTypes = {
  name: PropTypes.string,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};


export default OrderOptionText;
