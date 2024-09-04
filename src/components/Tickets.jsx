import { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const Tickets = () => {
    const [tickets, setTickets] = useState([
        {
            id: 1,
            movie: 'Filme A',
            session: 'Sala 1 - 14:00',
            customer: 'João Silva',
            price: 'R$ 30,00',
            date: '2024-09-05',
        },
        {
            id: 2,
            movie: 'Filme B',
            session: 'Sala 2 - 16:30',
            customer: 'Maria Souza',
            price: 'R$ 25,00',
            date: '2024-09-05',
        },
    ]);

    const handleDelete = (id) => {
        if (window.confirm('Tem certeza que deseja cancelar este ingresso?')) {
            setTickets(tickets.filter((ticket) => ticket.id !== id));
        }
    };

    return (
        <div className="tickets">
            <h2>Gerenciamento de Ingressos</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Filme</th>
                        <th>Sessão</th>
                        <th>Cliente</th>
                        <th>Preço</th>
                        <th>Data</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket) => (
                        <tr key={ticket.id}>
                            <td>{ticket.movie}</td>
                            <td>{ticket.session}</td>
                            <td>{ticket.customer}</td>
                            <td>{ticket.price}</td>
                            <td>{ticket.date}</td>
                            <td>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(ticket.id)}
                                >
                                    Cancelar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Tickets;
