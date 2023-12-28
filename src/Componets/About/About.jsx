import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../Images/ss1.webp'
import Img2 from '../../Images/ss2.jpg'
import Img3 from '../../Images/ss3.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './About.css'
const About = () => {
  return (
    <div className="AboutContainer">
        
        <Carousel style={{width:"100%" , marginLeft:"5px"}} >
        <Carousel.Item interval={1000} >
          <img src={Img1} alt="" style={{width:"100%",height:"400px"}}/>
          <Carousel.Caption style={{textShadow:"0px 4px 8px",color:"black"}}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={Img2} alt="" style={{width:"100%",height:"400px"}}/>
          <Carousel.Caption style={{textShadow:"2px 4px 8px",color:"black"}}>
            <h3 >Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img3} alt="" style={{width:"100%",height:"400px"}}/>
          <Carousel.Caption style={{textShadow:"2px 4px 8px",color:"black"}}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
       
      <div className="vision" id="about">
        <h2>Vision</h2>
        <p>
          To establish ourseves as the leading provider of most eco-friendly
          products globally, contributing significantly to a sustainable and
          greener earth.
        </p>
        <h2>About Us</h2>
        <p>
          Biocrafts is a platform where handcrafted items, like Toys, Wood,
          Woolen bags, Jute bags and Bamboo products and eco-friendly Products
          are available by creating an employment for artisans who are in lack
          of marketing and others like widows, senior-citizens, homemakers,
          handicap persons etc..,
        </p>
        <p>
          Through our brand, Biocrafts, we offer a wide range of eco-friendly
          products that are both functional and sustainable. From biodegradable
          packaging materials to organic and ethicaly sourced ingredients, we
          strive to provide options that align with our commitment to repairing
          and preserving our planet.
        </p>
      </div>
    </div>
  );
};

export default About;
