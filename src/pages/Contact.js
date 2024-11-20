// src/pages/Contact.js
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div className="container-fluid py-5" id="contact">
      <div className='row'>
        
      </div>
    <div className='col-8 offset-2'>
    <form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control type="email" placeholder='Enter your name' />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control type="email" placeholder='Enter your Email' />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control type="email" placeholder='Enter your Phone' />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Control placeholder='Enter your message' as="textarea" rows={3} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      {/* <Form.Control type="submit" /> */}
      {/* <button type='submit'>Submit</button> */}
      
      <div className="d-grid gap-2">
      <Button variant="outline-dark" size="lg">
        Submit
      </Button>
    </div>
    </Form.Group>
      
    </form>
      
      </div>
    
  </div>

  );
}

export default Contact;
