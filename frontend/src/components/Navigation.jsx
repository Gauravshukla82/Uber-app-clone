


import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {Nav, Navbar, Container, NavDropdown, Image} from 'react-bootstrap';  
import ProfileImage from './ProfileImage/ProfileImage';
import "./Navigation.css"
// bg="dark" variant="dark" color="white"
const Navigation = () => {

  const [name,setname]=useState("")

  // let name = JSON.parse(localStorage.getItem("username"))
  // console.log(name)
  // setname(username)

  useEffect(()=>{

    
  let username = JSON.parse(localStorage.getItem("username"))
  console.log(username)
  setname(username)
  },[])

  return (

    <>  
      <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark" color="white">  
        <Container>  
          <Navbar.Brand href="/" className='logoimage'><img src='./images/SAVARI1.png' alt="logo" className='logo'></img></Navbar.Brand>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
  
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">  
            <Nav.Link href="/" color="white">Home</Nav.Link>
              <Nav.Link href="/ride" color="white">Ride</Nav.Link>  
              <Nav.Link href="/eat" color="light">UberEat</Nav.Link>
              <Nav.Link href="/driver">Driver</Nav.Link> 
              <Nav.Link href="/buisness">Buisness</Nav.Link> 
          

              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">  
                <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>  
                <NavDropdown.Divider />  
                <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>  
              </NavDropdown>     */}
            </Nav>    
          </Navbar.Collapse>  

          <Nav>  
              <Nav.Link href="">{name}</Nav.Link>   

              {/* <NavDropdown title={name} id="profile-dropdown">
            <NavDropdown.Item href="#profile">View Profile</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown> */}
            </Nav>
            <Nav>
            <Nav.Link href="/login">Login</Nav.Link>   

            </Nav>
        </Container>  
      </Navbar>  
    </>  
   
  )
}

export default Navigation
