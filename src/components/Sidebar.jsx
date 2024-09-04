import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Nav defaultActiveKey="/dashboard" className="flex-column border-end">
            <Nav.Item>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/movies">Filmes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/rooms">Salas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/sessions">Sessões</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/tickets">Ingressos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/users">Usuários</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/settings">Configurações</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Sidebar;
