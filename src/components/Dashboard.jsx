import { Card, Row, Col, ProgressBar } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Row className="mb-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Sessões Atuais</Card.Title>
                            <Card.Text>3 sessões em andamento</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Ingressos Vendidos Hoje</Card.Title>
                            <Card.Text>120 ingressos</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Receita de Hoje</Card.Title>
                            <Card.Text>R$ 3.500</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Ocupação das Salas</Card.Title>
                            <ProgressBar now={60} label="60%" />
                            <ProgressBar now={40} label="40%" className="mt-2" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Próximas Sessões</Card.Title>
                            <ul>
                                <li>Filme A - 14:00</li>
                                <li>Filme B - 16:30</li>
                                <li>Filme C - 18:00</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
