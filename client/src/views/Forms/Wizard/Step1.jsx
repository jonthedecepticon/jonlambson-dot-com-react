import React from 'react';
import{
  Row, Col,
  FormGroup, FormControl, ControlLabel
} from 'react-bootstrap';


class Step1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type_text: "",
      type_textError: null,
      email: "",
      emailError: null
    }
  }
  isValidated(){
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(this.state.email) === false ? this.setState({ emailError: (<small className="text-danger">One Email is required and format should be <i>john@doe.com</i>, and commas seperating multiple emails.</small>) }):this.setState({ emailError: null });
    return re.test(this.state.email);
  }

  render(){
    return (
      <div className="wizard-step">
        <h5 className="text-center">Please tell us more about yourself.</h5>
        <Row>
          <Col md={5} mdOffset={1}>
            <FormGroup>
              <ControlLabel>Title <span className="text-danger">*</span></ControlLabel>
              <FormControl type="text" name="title" placeholder="ex: Title..." required />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <ControlLabel>Subject <span className="text-danger">*</span></ControlLabel>
              <FormControl type="text" name="Subject" placeholder="ex: Subject..." required />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={10} mdOffset={1}>
            <FormGroup>
              <ControlLabel>Email <span className="text-danger">*</span></ControlLabel>
              <FormControl type="email" name="email" placeholder="ex: hello@gmail.com, bye@aol.com, cool@msn.com" onChange={ (event) => this.setState({ email: event.target.value }) }/>
              {this.state.emailError}
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Step1;
