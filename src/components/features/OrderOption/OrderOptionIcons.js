// import React from 'react';
// import styles from './OrderOption.scss';
// import PropTypes from 'prop-types';
// import { formatPrice } from '../../../utils/formatPrice';
// import Icon from './../../common/Icon/Icon';


// const OrderOptionIcons = ({values, required, currentValue, setOptionValue, }) => (

//   <div className={styles.component}>

//     {required ? false : (
//       <div value=''>
//         <Icon name={'times-circle'} /> none
//       </div>
//     )}

//     {values.map(value => (
//       <div className={styles.icon} key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</div>
//     ))}
//   </div>

// );

// OrderOptionIcons.propTypes = {
//   values: PropTypes.array,
//   required: PropTypes.bool,
//   currentValue: PropTypes.string,
//   setOptionValue: PropTypes.func,
// };

// export default OrderOptionIcons;
