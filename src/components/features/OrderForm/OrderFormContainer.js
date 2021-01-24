import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux.js';
import {setOrderOption} from '../../../redux/orderRedux.js';


const mapStateToProps = (state) => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = (dispatch) => ({
  setOrderOption: (option) => dispatch(setOrderOption({option})),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
