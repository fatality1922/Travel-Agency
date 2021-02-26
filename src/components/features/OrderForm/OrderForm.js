import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost, tripName, tripId) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  if (options.name && options.contact) {

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json();
      }).then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    alert('Fill required informations');
  }
};

const OrderForm = ({ tripCost, options, setOrderOption, tripId, tripName }) => (

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
        <Button onClick={() =>
          sendOrder(options, tripCost, tripId, tripName)}>Order now!
        </Button>
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
};

export default OrderForm;


