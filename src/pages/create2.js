import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// importing UI components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import './create.css';

import '../bs.css';

function FormTwo() {
  const [series, setSeries] = useState('Normal');

  function sform() {
    switch (series) {
      case 'Normal':
        break;
      case 'Series':
        return (
          <>
            <Form.Group>
              <Form.Label>Series Number</Form.Label>
              <Form.Control placeholder="How many series are you intend to register" />
            </Form.Group>
          </>
        );
        break;
      case 'SeriesClosed':
        break;
    }
  }
  return (
    <Form>
      <Form.Group>
        <Form.Label>Entity Type</Form.Label>
        <Form.Row>
          <Form.Check inline name="series" type="radio" label="Normal" onClick={() => setSeries('Normal')} />
          <Form.Check inline name="series"  type="radio" label="Series" onClick={() => setSeries('Series')} />
          <Form.Check inline  name="series" type="radio" label="SeriesClosed" onClick={() => setSeries('SeriesClosed')} />
        </Form.Row>
      </Form.Group>
      {sform()}
    </Form>
  );
}
function FormOne() {
  const [jurisdiction, setJurisdiction] = useState();
  var general = {
    email: null,
    companyName: null,
    firstName: null,
    lastName: null,
    phone: null,
    jurisdiction: null,
    comapnyAddress: null,
    companyAddressTwo: null,
    city: null,
    state: null,
    zip: null,
    concealAddress: null,
    tokenAddress: null,
    interfaceAddress: null,
  };
  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function jform() {
    switch (jurisdiction) {
      case 'Wyoming':
        return (
          <>
            <Form.Group>
              <Form.Label>Company Address</Form.Label>
              <Form.Control type="text" placeholder="1234 Main St" onChange={(e) => this.general.companyAdress = e.target.value} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Company Address line 2</Form.Label>
              <Form.Control type="text" placeholder="Apartment, studio, or floor" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Label as="legend" column sm={4}>Conceal Adddress: </Form.Label>
              <Form.Check inline name="concealAddress" type="radio" label="No" />
              <Form.Check inline name="concealAddress" type="radio" label="Yes" />
            </Form.Row>
          </>
        );
        break;
      case 'Ethereum':
        return (
          <>
            <Form.Group>
              <Form.Label>Token Address</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </>
        );
        break;
      case 'Aragon':
        return (
          <>
            <Form.Group>
              <Form.Label>Aragon Interface Address</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </>
        );
        break;
      default:
        return null;
        break;

    }

  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={(e) => general.email = e.target.value}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text" placeholder="Enter registering company name" />
        <Form.Text className="text-muted">
          The company name you entered is either unavailable or of wrong format
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Contact Person</Form.Label>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Form.Row>
      </Form.Group>
      <Form.Group>
        <Form.Label>Daytime Phone Number</Form.Label>
        <Form.Control type="phone" placeholder="" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Company Jurisdiction</Form.Label>
        <Form.Row>
          <Form.Check inline name="jurisdiction" type="radio" label="Wyoming" onClick={() => setJurisdiction('Wyoming')} />
          <Form.Check inline name="jurisdiction"  type="radio" label="Ethereum" onClick={() => setJurisdiction('Ethereum')}/>
          <Form.Check inline  name="jurisdiction" type="radio" label="Aragon" onClick={() => setJurisdiction('Aragon')} />
        </Form.Row>
      </Form.Group>
      {jform()}
      <Button type="submit" variant="primary">Next</Button>
    </Form>
  );
}
function Wrapper() {
  return (
      <div className="formContainer">
        <FormProgressBar />
        <Forms />
      </div>
  );
}

function FormProgressBar() {
  return (
    <div className="formProgressBar">

    </div>
  );
}

function Forms() {
  const [step, setStep] = useState(1);

  function handleState(state) {
    if (state == 'forward') {
      setStep(step + 1);
    } else if (state == 'backward') {
      setStep(step - 1);
    }
  }
  return (
    <>
      {step == 1 && <FormOne handleState={handleState} />}
      {step == 2 && <FormTwo handleState={handleState} />}
    </>
  );
}

export default Wrapper;
