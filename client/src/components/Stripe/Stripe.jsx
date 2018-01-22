import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Button from 'elements/CustomButton/CustomButton.jsx';

class Stripe extends Component {
  render() {
    return (
      <StripeCheckout
        name="Blah"
        description="blahhhhh"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button fill round wd>
          Donate
        </Button>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Stripe);
