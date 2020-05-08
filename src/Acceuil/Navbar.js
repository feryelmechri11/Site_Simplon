import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="menuSimplon">
        <NavbarBrand href="/"><img className="logo" src ="data:image/png;base64,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"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            
              <NavLink href="/">Acceuil</NavLink>
    
            </NavItem>
            <NavItem>
              <NavLink href="/Apropos">A propos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/equipe">Equipe</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            
          </Nav>
        
        </Collapse>
      </Navbar>
  
 

    </div>
    
   
    
  );
}

export default Example;