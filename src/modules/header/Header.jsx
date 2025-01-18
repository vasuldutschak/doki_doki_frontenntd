import  { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    // Токен (заміни на динамічне отримання, якщо потрібно)
    const token = localStorage.getItem('token');

    // Отримання даних про користувача
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('https://doki-doki-three.vercel.app/api/v1/auth/current', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data); // Зберігаємо дані користувача
            } catch (err) {
                setError('Failed to load user info.');
                console.log(err);
            }
        };

        fetchUser();
    }, [token]);

    // Логіка для кнопки Logout
    const handleLogout = async () => {
        try {
            await axios.post(
                'https://doki-doki-three.vercel.app/api/v1/auth/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            localStorage.removeItem('token'); // Видаляємо токен
            window.location.href = '/login'; // Перенаправляємо на сторінку логіну
        } catch (err) {
            alert('Failed to log out. Please try again.');
        }
    };

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: '#4caf50',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
            }}
        >
            <div>
                <h1 style={{ margin: 0, fontSize: '24px' }}>Doki Doki</h1>
            </div>
            <div>
                {user ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <p style={{ margin: 0 }}>
                            <strong>{user.name}</strong> ({user.email})
                        </p>
                        <button
                            onClick={handleLogout}
                            style={{
                                backgroundColor: 'white',
                                color: '#4caf50',
                                border: '1px solid #4caf50',
                                padding: '5px 10px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <p>{error || 'Loading user...'}</p>
                )}
            </div>
        </header>
    );
};

export default Header;
