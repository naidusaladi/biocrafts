import Carousel from 'react-bootstrap/Carousel';
import Car1 from '../../Images/b2.jpg'

function Home() {
  return (
    <>
    <div id="Home"></div>
      <Carousel >
        <Carousel.Item interval={1000} >
          <img src={Car1} alt="" style={{width:"100%",height:"600px"}}/>
          <Carousel.Caption style={{textShadow:"0px 4px 8px",color:"black"}}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={Car1} alt="" style={{width:"100%",height:"600px"}}/>
          <Carousel.Caption style={{textShadow:"2px 4px 8px",color:"black"}}>
            <h3 >Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Car1} alt="" style={{width:"100%",height:"600px"}}/>
          <Carousel.Caption style={{textShadow:"2px 4px 8px",color:"black"}}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;