import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img1 from '../../Images/jut1.webp'

function JuteItems() {
  return (
    <>
    <div id="Jut" style={{height:"60px"}}></div>
    <h1 style={{margin:"20px"}}>Jute Items</h1>
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:"12px"}}>
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
    </>
  );
}

export default JuteItems;