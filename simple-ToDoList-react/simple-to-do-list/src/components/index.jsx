import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = ({ title }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">{title}</Navbar.Brand>
  </Navbar>
);

export default Header;
