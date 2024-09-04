import { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import SessionForm from './SessionForm';

const Sessions = () => {
    const [sessions, setSessions] = useState([
        {
            id: 1,
            movie: 'Filme A',
            room: 'Sala 1',
            date: '2024-09-05',
            time: '14:00',
        },
        {
            id: 2,
            movie: 'Filme B',
            room: 'Sala 2',
            date: '2024-09-05',
            time: '16:30',
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [currentSession, setCurrentSession] = useState(null);

    const handleAdd = () => {
        setCurrentSession(null);
        setShowModal(true);
    };

    const handleEdit = (session) => {
        setCurrentSession(session);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Tem certeza que deseja excluir esta sessão?')) {
            setSessions(sessions.filter((session) => session.id !== id));
        }
    };

    const handleSave = (session) => {
        if (session.id) {
            setSessions(sessions.map((s) => (s.id === session.id ? session : s)));
        } else {
            session.id = sessions.length > 0 ? sessions[sessions.length - 1].id + 1 : 1;
            setSessions([...sessions, session]);
        }
        setShowModal(false);
    };

    return (
        <div className="sessions">
            <h2>Programação de Sessões</h2>
            <Button variant="primary" className="mb-3" onClick={handleAdd}>
                Adicionar Sessão
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Filme</th>
                        <th>Sala</th>
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.map((session) => (
                        <tr key={session.id}>
                            <td>{session.movie}</td>
                            <td>{session.room}</td>
                            <td>{session.date}</td>
                            <td>{session.time}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleEdit(session)}
                                >
                                    Editar
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(session.id)}
                                >
                                    Excluir
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentSession ? 'Editar Sessão' : 'Adicionar Sessão'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SessionForm session={currentSession} onSave={handleSave} onCancel={() => setShowModal(false)} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Sessions;
