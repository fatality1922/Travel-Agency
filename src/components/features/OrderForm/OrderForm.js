import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = (tripCost, options, setOrderOption) => (

  <Grid>
    <Row>
      {pricing.map((option) => (
        <Col md={4} key={option.id}>
          {' '}
          <OrderOption
            setOrderOption={setOrderOption}
            currentValue={options[option.id]}
            title={option.id}
            {...option}
          />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;


