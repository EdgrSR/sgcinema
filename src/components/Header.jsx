import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="border-bottom">
            <Container fluid>
                <Navbar.Brand href="#home">SGCinema</Navbar.Brand>
                <Nav>
                    <NavDropdown title="Usuário" align="end">
                        <NavDropdown.Item href="#profile">Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#logout">Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
