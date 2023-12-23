import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img1 from '../../Images/b5.jpg'
import Carousel from 'react-bootstrap/Carousel';
function BanbooItems() {
  return (
    <>
    <div id="Ban" style={{height:"60px"}}></div>
    <h1  style={{margin:"20px"}}>Banboo Items</h1>
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:"12px"}} >
    <Carousel  style={{width:"100%"}}>
      <Carousel.Item interval={1000}  >
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <Card style={{ width: '18rem',}}>
        <img variant="top" src={Img1} alt='' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', }}>
        <img variant="top" src={Img1} alt='' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', }}>
        <img variant="top" src={Img1} alt='' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      </Carousel.Item>

      <Carousel.Item interval={1500}   >
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <Card style={{ width: '18rem',}}>
          <img variant="top" src={Img1} alt='' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary"> somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', }}>
          <img variant="top" src={Img1} alt='' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', }}>
          <img variant="top" src={Img1} alt='' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default BanbooItems;