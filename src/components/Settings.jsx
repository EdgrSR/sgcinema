import { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const Settings = () => {
    const [theme, setTheme] = useState('Claro');
    const [notifications, setNotifications] = useState(true);

    const handleSave = (e) => {
        e.preventDefault();
        alert(`Configurações salvas!\nTema: ${theme}\nNotificações: ${notifications ? 'Ativadas' : 'Desativadas'}`);
    };

    return (
        <div className="settings">
            <h2>Configurações do Sistema</h2>
            <Form onSubmit={handleSave}>
                <Form.Group as={Col} controlId="formTheme" className="mb-3">
                    <Form.Label>Tema</Form.Label>
                    <Form.Select value={theme} onChange={(e) => setTheme(e.target.value)}>
                        <option>Claro</option>
                        <option>Escuro</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formNotifications" className="mb-3">
                    <Form.Check
                        type="checkbox"
                        label="Ativar notificações"
                        checked={notifications}
                        onChange={(e) => setNotifications(e.target.checked)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Salvar Configurações
                </Button>
            </Form>
        </div>
    );
};

export default Settings;
