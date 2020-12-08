import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Dropdown} from 'react-bootstrap'
import Typewriter from 'typewriter-effect';
import {HashLink} from 'react-router-hash-link'
const Component = () => {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" fixed="top" >
              <Navbar.Brand href="#home">
                <Typewriter
                  options={{
                    strings: ['{web_developer}','COFFEE_ADDICT','const me = cat-lover','[softwareEngineer]'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="ml-auto">
                      <Nav.Link as={HashLink} smooth to='#top' >Home</Nav.Link>
                      <Nav.Link as={HashLink} smooth to='#portfolio' >Portfolio</Nav.Link>
                      <Nav.Link as={HashLink} smooth to='#about' >About</Nav.Link>
                      <Nav.Link as={HashLink} smooth to='#contact' >Contact</Nav.Link>
                      <Dropdown drop='left'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Styles
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to="/">Raining City</Dropdown.Item>
                          <Dropdown.Item as={Link} to="/modern">Simple Modern</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                   </Nav>
                 </Navbar.Collapse>
                </Navbar>
        </div>
    )
}

export default Component