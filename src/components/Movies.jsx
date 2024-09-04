import { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import MovieForm from './MovieForm';

const Movies = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: 'Filme A',
            duration: '120 min',
            genre: 'Ação',
            rating: '12+',
            status: 'Em Cartaz',
        },
        {
            id: 2,
            title: 'Filme B',
            duration: '90 min',
            genre: 'Comédia',
            rating: 'Livre',
            status: 'Em Cartaz',
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [currentMovie, setCurrentMovie] = useState(null);

    const handleAdd = () => {
        setCurrentMovie(null);
        setShowModal(true);
    };

    const handleEdit = (movie) => {
        setCurrentMovie(movie);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Tem certeza que deseja excluir este filme?')) {
            setMovies(movies.filter((movie) => movie.id !== id));
        }
    };

    const handleSave = (movie) => {
        if (movie.id) {
            setMovies(movies.map((m) => (m.id === movie.id ? movie : m)));
        } else {
            movie.id = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
            setMovies([...movies, movie]);
        }
        setShowModal(false);
    };

    return (
        <div className="movies">
            <h2>Gerenciamento de Filmes</h2>
            <Button variant="primary" className="mb-3" onClick={handleAdd}>
                Adicionar Filme
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Duração</th>
                        <th>Gênero</th>
                        <th>Classificação</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.duration}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.rating}</td>
                            <td>{movie.status}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleEdit(movie)}
                                >
                                    Editar
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(movie.id)}
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
                    <Modal.Title>{currentMovie ? 'Editar Filme' : 'Adicionar Filme'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MovieForm movie={currentMovie} onSave={handleSave} onCancel={() => setShowModal(false)} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Movies;
