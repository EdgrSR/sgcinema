import { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import RoomForm from './RoomForm';

const Rooms = () => {
    const [rooms, setRooms] = useState([
        {
            id: 1,
            name: 'Sala 1',
            capacity: 150,
            type: 'IMAX',
            status: 'Ativa',
        },
        {
            id: 2,
            name: 'Sala 2',
            capacity: 100,
            type: '3D',
            status: 'Ativa',
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [currentRoom, setCurrentRoom] = useState(null);

    const handleAdd = () => {
        setCurrentRoom(null);
        setShowModal(true);
    };

    const handleEdit = (room) => {
        setCurrentRoom(room);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Tem certeza que deseja excluir esta sala?')) {
            setRooms(rooms.filter((room) => room.id !== id));
        }
    };

    const handleSave = (room) => {
        if (room.id) {
            setRooms(rooms.map((r) => (r.id === room.id ? room : r)));
        } else {
            room.id = rooms.length > 0 ? rooms[rooms.length - 1].id + 1 : 1;
            setRooms([...rooms, room]);
        }
        setShowModal(false);
    };

    return (
        <div className="rooms">
            <h2>Gerenciamento de Salas</h2>
            <Button variant="primary" className="mb-3" onClick={handleAdd}>
                Adicionar Sala
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Capacidade</th>
                        <th>Tipo</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room) => (
                        <tr key={room.id}>
                            <td>{room.name}</td>
                            <td>{room.capacity}</td>
                            <td>{room.type}</td>
                            <td>{room.status}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleEdit(room)}
                                >
                                    Editar
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(room.id)}
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
                    <Modal.Title>{currentRoom ? 'Editar Sala' : 'Adicionar Sala'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RoomForm room={currentRoom} onSave={handleSave} onCancel={() => setShowModal(false)} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Rooms;
