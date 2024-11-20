// src/components/Footer.js
import React from 'react';
import Form from 'react-bootstrap/Form';

function Footer() {
  return (
    <div className="container-fluid" id="fotter">
      <div className="row">
        <div className="col-3 offset-1">
        Jammu Gymkhana<br></br>
        Bombay Gymkhana established in 1875, is<br></br>
         one of the premiere gymkhanas (sports<br></br>
          arena) in the city of Mumbai (Bombay), India.<br></br><br></br>

        <button>Read More </button><br></br><br></br>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d105756.68919209411!2d74.80279039999999!3d34.0721664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731317528866!5m2!1sen!2sin" width="300" height="300" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        
        <div className="col-3">
       <strong> Quick links</strong> <br></br><br></br>
        Tender Documents<br></br>
        Privacy Policy<br></br>
        CSR Policy<br></br>
        Vision<br></br><br></br>
        <strong>Contact</strong><br></br><br></br>
        Mahatma Gandhi Road, Opp Fashion Street,
        Azad Maidan, Fort, Bantalab, Jammu 180001.<br></br><br></br>

        Ph: +91 0191 3400<br></br><br></br>

        mail: admin@jammugymkhana.000
        </div>

        <div className='col-4'>
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
            <Form.Control type="submit" />
          </Form.Group>
            
          </form>
        </div>
        

      </div>

      <footer className='py-5' id='footer'>Copyright 2024 &copy; Hatishwar Singh <br></br>(Design inspired by bombygymkhana website)</footer>

    </div>

  );
}

export default Footer;
