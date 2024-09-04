import { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import UserForm from './UserForm';

const Users = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'João Silva',
            email: 'joao.silva@cinema.com',
            role: 'Administrador',
        },
        {
            id: 2,
            name: 'Maria Souza',
            email: 'maria.souza@cinema.com',
            role: 'Operador',
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const handleAdd = () => {
        setCurrentUser(null);
        setShowModal(true);
    };

    const handleEdit = (user) => {
        setCurrentUser(user);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
            setUsers(users.filter((user) => user.id !== id));
        }
    };

    const handleSave = (user) => {
        if (user.id) {
            setUsers(users.map((u) => (u.id === user.id ? user : u)));
        } else {
            user.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
            setUsers([...users, user]);
        }
        setShowModal(false);
    };

    return (
        <div className="users">
            <h2>Gerenciamento de Usuários</h2>
            <Button variant="primary" className="mb-3" onClick={handleAdd}>
                Adicionar Usuário
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Papel</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleEdit(user)}
                                >
                                    Editar
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(user.id)}
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
                    <Modal.Title>{currentUser ? 'Editar Usuário' : 'Adicionar Usuário'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserForm user={currentUser} onSave={handleSave} onCancel={() => setShowModal(false)} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Users;
