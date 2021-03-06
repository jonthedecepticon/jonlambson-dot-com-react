import React, { Component } from 'react';
import {
  Grid, Row, Col
} from 'react-bootstrap';
import { connect } from 'react-redux';

import Stripe from '../../components/Stripe/Stripe';

import Card from 'components/Card/Card.jsx';


class Donate extends Component {
  render() {
    return (
      <div className="main-content donate-page">
        <Grid fluid>
          <Row>
            <Col md={6} mdOffset={3}>
              <Card
                title="Purchase Credits"
                content={
                  <Stripe />
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

  export default connect(mapStateToProps)(Donate);
