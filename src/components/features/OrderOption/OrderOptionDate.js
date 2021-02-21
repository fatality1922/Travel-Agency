import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';


const OrderOptionDate = ({ currentValue, name, setOptionValue }) => (

  <div className={styles.component}>
    <DatePicker
      type="date"
      className={styles.input}
      selected={currentValue}
      onChange={date => setOptionValue(date)}
      name={name}
      placeholderText={'your start date'} />

  </div>
);

OrderOptionDate.propTypes = {
  name: PropTypes.string,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  startDate: PropTypes.string,
  setStartDate: PropTypes.string,
};


export default OrderOptionDate;