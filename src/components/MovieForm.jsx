import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const MovieForm = ({ movie, onSave, onCancel }) => {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [status, setStatus] = useState('Em Cartaz');

    useEffect(() => {
        if (movie) {
            setTitle(movie.title);
            setDuration(movie.duration);
            setGenre(movie.genre);
            setRating(movie.rating);
            setStatus(movie.status);
        } else {
            setTitle('');
            setDuration('');
            setGenre('');
            setRating('');
            setStatus('Em Cartaz');
        }
    }, [movie]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            id: movie ? movie.id : null,
            title,
            duration,
            genre,
            rating,
            status,
        };
        onSave(newMovie);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle" className="mb-3">
                <Form.Label>Título do Filme</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o título do filme"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formDuration" className="mb-3">
                <Form.Label>Duração</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ex: 120 min"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formGenre" className="mb-3">
                <Form.Label>Gênero</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ex: Ação, Comédia"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formRating" className="mb-3">
                <Form.Label>Classificação Indicativa</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ex: 12+, Livre"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formStatus" className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option>Em Cartaz</option>
                    <option>Indisponível</option>
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

export default MovieForm;
