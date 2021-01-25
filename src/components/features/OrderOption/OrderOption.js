import React from 'react';
//import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOption = ({name}) => (

  <div className= {styles.component}>
    <h3 className={styles.title}> {name} </h3>
  </div>

);

OrderOption.propTypes = {
  name: PropTypes.string,
  type: PropTypes.node,
};
  

export default OrderOption;
