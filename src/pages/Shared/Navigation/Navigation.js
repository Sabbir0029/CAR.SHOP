import React from 'react';
import { Button, Container, Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  
  const {user,logOut} = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect className='fixed-top' expand="lg" bg="dark" variant="dark">
               <Container>
               <Navbar.Brand as={Link} to="/home" className='fw-bold fst-italic'>CAR<span className='text-danger fw-bold'>.SHOP</span></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="me-auto">
                   <Nav.Link as={Link}  to="/home" className='text-light fw-bold fst-italic'>Home</Nav.Link>
                   <Nav.Link as={Link}  to="/ContactUs" className='text-light fw-bold fst-italic'>Contact Us</Nav.Link>
                   <Nav.Link as={Link}  to="/AllProducts" className='text-light fw-bold fst-italic'>All Products</Nav.Link>

                   {
                     user?.email? 
                     <div className='navigation'>
                       <Nav.Link as={Link}  to="/dashboard" className='text-light fw-bold fst-italic'>Dashboard</Nav.Link>
                     <Nav.Link as={Link}  to="/myOrder" className='text-light fw-bold fst-italic'>MyOrder</Nav.Link>
                     </div>
                     :
                     <Nav.Link as={Link}  to="/dashboard" className='text-light fw-bold fst-italic'></Nav.Link>
                   }
                   
                 </Nav>
                 <Nav>
                   <Nav.Link  as={Link} to="/register"
                   className='text-light fw-bold fst-italic'>Register</Nav.Link>
                   {
                     user?.email? 
                     <Button variant="dark" className='text-light fw-bold fst-italic' onClick={logOut}>LogOut</Button>
                     :
                     <Nav.Link  as={Link} to="/login" className='text-light fw-bold fst-italic'>Login</Nav.Link>
                   }
                 </Nav>
               </Navbar.Collapse>
               </Container>
           </Navbar>
        </div>
    );
};

export default Navigation;