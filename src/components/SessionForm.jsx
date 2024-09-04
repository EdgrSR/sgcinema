import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const SessionForm = ({ session, onSave, onCancel }) => {
    const [movie, setMovie] = useState('');
    const [room, setRoom] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        if (session) {
            setMovie(session.movie);
            setRoom(session.room);
            setDate(session.date);
            setTime(session.time);
        } else {
            setMovie('');
            setRoom('');
            setDate('');
            setTime('');
        }
    }, [session]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSession = {
            id: session ? session.id : null,
            movie,
            room,
            date,
            time,
        };
        onSave(newSession);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formMovie" className="mb-3">
                <Form.Label>Filme</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o nome do filme"
                    value={movie}
                    onChange={(e) => setMovie(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formRoom" className="mb-3">
                <Form.Label>Sala</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o nome da sala"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formDate" className="mb-3">
                <Form.Label>Data</Form.Label>
                <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formTime" className="mb-3">
                <Form.Label>Horário</Form.Label>
                <Form.Control
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
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

export default SessionForm;
