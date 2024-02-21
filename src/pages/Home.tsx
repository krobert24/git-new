import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import a CSS file for additional styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';

export const Home: React.FC = () => {
  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center">
    
     <div className="glow-and-spin">
      <img src="imgs/log.PNG"
        alt="logo"
        style={{ width: '200px', height: '200px', margin: '0 auto' }}
        className="mx-auto"
      /></div><div className='d'><p className='text-muted'>*All Customers Now Receiving 20% Off </p></div>
      <div className='explore'>
      <h1 className='h'>
        Explore our latest collection and find the perfect styles!<p> Don't miss out on our amazing deals!</p>
      </h1></div>
      <Link to="/Store">
        <Button variant="primary">Shop Now</Button>
      </Link>
    </Container>
  );
};