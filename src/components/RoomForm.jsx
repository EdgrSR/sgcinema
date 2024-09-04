import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const RoomForm = ({ room, onSave, onCancel }) => {
    const [name, setName] = useState('');
    const [capacity, setCapacity] = useState('');
    const [type, setType] = useState('IMAX');
    const [status, setStatus] = useState('Ativa');

    useEffect(() => {
        if (room) {
            setName(room.name);
            setCapacity(room.capacity);
            setType(room.type);
            setStatus(room.status);
        } else {
            setName('');
            setCapacity('');
            setType('IMAX');
            setStatus('Ativa');
        }
    }, [room]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRoom = {
            id: room ? room.id : null,
            name,
            capacity,
            type,
            status,
        };
        onSave(newRoom);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Nome da Sala</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o nome da sala"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formCapacity" className="mb-3">
                <Form.Label>Capacidade</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Digite a capacidade da sala"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formType" className="mb-3">
                <Form.Label>Tipo</Form.Label>
                <Form.Select value={type} onChange={(e) => setType(e.target.value)} required>
                    <option>IMAX</option>
                    <option>3D</option>
                    <option>2D</option>
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="formStatus" className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option>Ativa</option>
                    <option>Inativa</option>
                </Form.Select>
            </Form.Group>

            <div className="d-flex justify-content-end">
                <Button variant="secondary" onClick={onCancel} className="me-2">
                    Cancelar
                </Button>
                <Button variant="primary" type="submit">
                    Salvar
                </Button>
            </div>
        </Form>
    );
};

export default RoomForm;
