// src/pages/Restaurant.js
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import car1 from '../Assets/car1.jpg';
import car2 from '../Assets/car2.jpg';
import car3 from '../Assets/car3.jpg';
import car4 from '../Assets/car4.jpg';
import car5 from '../Assets/car5.jpg';
import car6 from '../Assets/car6.jpg';


function MyReasturent() {
  return (
    <div className='container-fluid my-5 '>
        <div className='row'>
        <h1>Reasturent</h1>
        <div className='col-3 offset-1'>
        <Card.Img variant="top" src={car1} height={'300px'} />
      <Card.Body>
        <Card.Text>
            THE DINING HALL
        </Card.Text>
      </Card.Body>
        </div>

        <div className='col-4'>
        <Card.Img variant="top" src={car2} height={'300px'} />
      <Card.Body>
        <Card.Text>
            GYM'S INN BAR
        </Card.Text>
      </Card.Body>
        </div>

        <div className='col-3'>
        <Card.Img variant="top" src={car3} height={'300px'} />
      <Card.Body>
        <Card.Text>
            THE CAFE
        </Card.Text>
      </Card.Body>
        </div>
    
        <div className='col-3 offset-1'>
        <Card.Img variant="top" src={car4} height={'300px'} />
      <Card.Body>
        <Card.Text>
            VERANDH
        </Card.Text>
      </Card.Body>
        </div>
        <div className='col-4'>
        <Card.Img variant="top" src={car5} height={'300px'} />
      <Card.Body>
        <Card.Text>
            PALM COURT
        </Card.Text>
      </Card.Body>
        </div>
        <div className='col-3'>
        <Card.Img variant="top" src={car6} height={'300px'} />
      <Card.Body>
        <Card.Text>
            THE PAVILION
        </Card.Text>
      </Card.Body>
        </div>
      
    </div>

    </div>
  );
}

export default MyReasturent;
