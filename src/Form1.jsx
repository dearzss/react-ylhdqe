import React from 'react';
import { Masthead, Footer } from 'sgds-govtech-react/dist/standard';
import { Breadcrumb } from '@govtechsg/sgds-react/Breadcrumb';

import {
  Button,
  Row,
  Col,
  Form,
  InputGroup,
  DatePicker,
} from '@govtechsg/sgds-react';
import 'sgds-govtech/css/sgds.css';

const styles = {};
export default function Form1() {
  return (
    <div style={{ styles }}>
      <Masthead />
      <section className="my-8 mx-md-8">
        <Breadcrumb>
          <Breadcrumb.Item href="">HOME</Breadcrumb.Item>
          <Breadcrumb.Item active>SIGN-UP</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col xs={12} md={4}>
            <h1>Sign-up</h1>
            <p className="text-muted">
              Already a member?{' '}
              <a href="" className="text-decoration-none">
                Log in
              </a>
            </p>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-end align-items-center"
          >
            <a href="" className="me-4">
              Cancel
            </a>
            <Button variant="outline-dark" className="me-4">
              Save as draft
            </Button>
            <Button variant="secondary">Next</Button>
          </Col>
        </Row>
      </section>
      <section className="shadow rounded p-5 my-8 mx-md-8">
        <Col sm={8}>
          <Form>
            <Row>
              <Form.Group
                as={Col}
                xs={12}
                md={6}
                className="mb-3"
                controlId="formSinglePageInput1"
              >
                <Form.Label>Label</Form.Label>
                <Form.Control type="text" placeholder="Text goes here1" />
              </Form.Group>
              <Form.Group
                as={Col}
                xs={12}
                md={6}
                className="mb-3"
                controlId="formSinglePageInput2"
              >
                <Form.Label>Label</Form.Label>
                <Form.Control type="text" placeholder="Text goes here2" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formSinglePageInput3">
              <Form.Label>Label</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Text goes here3"
                  aria-label="Dollar amount (with dot and two decimal places)"
                />
                <InputGroup.Text>@something</InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSinglePageInput4">
              <Form.Label>Label</Form.Label>
              <Form.Control type="text" placeholder="Text goes here" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formSinglePageDatepicker1">
              <Form.Label>Label</Form.Label>
              <DatePicker />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSinglePageSelect1">
              <Form.Label>Label</Form.Label>
              <Form.Select>
                <option>Text goes here</option>
                <option>Text goes here</option>
                <option>Text goes here</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSinglePageRadio1">
              <Form.Label>Label</Form.Label>
              <Form.Check type="radio" name="radioGroup1" label="Input 1" />
              <Form.Check type="radio" name="radioGroup1" label="Input 2" />
              <Form.Check type="radio" name="radioGroup1" label="Input 3" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSinglePageInput5">
              <Form.Label>Label</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                type="text"
                placeholder="This is the text that has been filled in"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox1">
              <Form.Check
                type="checkbox"
                label="I agree to the terms of the Subscriber Agreement and the Privacy Policy"
              />
            </Form.Group>
          </Form>
        </Col>
      </section>
      <div className="d-flex justify-content-end my-8 mx-md-8">
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
}
