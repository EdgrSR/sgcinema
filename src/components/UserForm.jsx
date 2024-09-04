import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({ user, onSave, onCancel }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('Operador');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setRole(user.role);
        } else {
            setName('');
            setEmail('');
            setRole('Operador');
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: user ? user.id : null,
            name,
            email,
            role,
        };
        onSave(newUser);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o nome do usuário"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Digite o email do usuário"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formRole" className="mb-3">
                <Form.Label>Papel</Form.Label>
                <Form.Select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option>Operador</option>
                    <option>Administrador</option>
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

export default UserForm;
