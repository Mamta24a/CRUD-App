import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

class NavbarMenu extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">CRUD-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="navbar-dark navbar-nav nav-link" to="/user-list">Users</Link>
                        <Link className="navbar-dark navbar-nav nav-link" to="/branch-list">Branches</Link>
                        <Link className="navbar-dark navbar-nav nav-link" to="/employer-list">Employers</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#dummyLogout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarMenu;