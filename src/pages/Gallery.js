// src/pages/Gallery.js
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import banquete from '../Assets/banquete.jpg';
import sport from '../Assets/sport.jpg';
import prenning from '../Assets/prenning.jpg';
import unwind from '../Assets/unwind.jpg';
import library from '../Assets/library.jpg';


function Gallery() {
  return (
    <div className='container-fluid my-5'>
        <div className='row'>
        <h1>GALLERY</h1>
        <div className='col-3 offset-1'>
        <Card.Img variant="top" src={banquete} height={'400px'} />
      <Card.Body>
        <Card.Text>
            BANQUETS
        </Card.Text>
      </Card.Body>
        </div>

        <div className='col-4'>
        <Card.Img variant="top" src={sport} height={'400px'} />
      <Card.Body>
        <Card.Text>
            SPORTS
        </Card.Text>
      </Card.Body>
        </div>

        <div className='col-3'>
        <Card.Img variant="top" src={prenning} height={'400px'} />
      <Card.Body>
        <Card.Text>
            PREENING POINT
        </Card.Text>
      </Card.Body>
        </div>
    
        <div className='col-5 offset-1'>
        <Card.Img variant="top" src={unwind} />
      <Card.Body>
        <Card.Text>
            UNWIND ZONE
        </Card.Text>
      </Card.Body>
        </div>
        <div className='col-5'>
        <Card.Img variant="top" src={library} />
      <Card.Body>
        <Card.Text>
            LIBRARY
        </Card.Text>
      </Card.Body>
        </div>
      
    </div>

    </div>
  );
}

export default Gallery;
