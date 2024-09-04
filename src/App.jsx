import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Movies from './components/Movies';
import Rooms from './components/Rooms';
import Sessions from './components/Sessions';
import Tickets from './components/Tickets';
import Users from './components/Users';
import Settings from './components/Settings';

const App = () => {
    document.documentElement.setAttribute('data-bs-theme', 'dark');

    return (
        <Router>
            <div className="d-flex flex-column h-100">
            <Header />
            <div className="d-flex flex-grow-1">
                <Sidebar />
                <main className="flex-grow-1 p-3">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/rooms" element={<Rooms />} />
                        <Route path="/sessions" element={<Sessions />} />
                        <Route path="/tickets" element={<Tickets />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="*" element={<Dashboard />} />
                    </Routes>
                </main>
            </div>
            </div>
        </Router>
    );
};

export default App;
