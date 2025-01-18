import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import styled from "styled-components";
import PageLoader from "../loaders/PageLoader.jsx";


const TableWrapper = styled.div`
  margin: 0px auto;
  padding: 10px;
  max-width: 100%;
  background-color: #1e1e1e; /* Темний фон для таблиці */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  color: white;
`;

const TableHeader = styled.thead`
    background-color: #27ae60; /* Темно-зелений фон */
    color: white;
    text-transform: uppercase;
    th {
        padding: 20px; /* Збільшений відступ для заголовків */
        text-align: center;
    }
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #2c2c2c; /* Темно-сірий фон для чергування */
  }
  &:nth-child(even) {
    background-color: #1e1e1e; /* Чорний фон */
  }
  &:hover {
    background-color: #34495e; /* Синюватий відтінок при наведенні */
  }
`;

const TableData = styled.td`
  border: 1px solid #444; /* Тонка сіра межа */
  padding: 15px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2ecc71; /* Світло-зелений текст */
  font-weight: bold;

  &:hover {
    color: #1abc9c; /* Насичений зелений */
    text-decoration: underline;
  }
`;
function UsersPage() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Токен (заміни на динамічне отримання, якщо потрібно)
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://doki-doki-three.vercel.app/api/v1/users', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(response.data); // Зберігаємо список користувачів
            } catch (err) {
                setError('Failed to fetch users. Please try again.');
            } finally {
                setIsLoading(false); // Завершуємо завантаження
            }
        };

        fetchUsers();
    }, [token]);


    if (isLoading) {
        return <PageLoader/>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{padding:'10px'}}>USERS</h1>
            <TableWrapper>
                <StyledTable>
                    <TableHeader>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Hourly Rate</th>
                            <th>Role</th>
                        </tr>
                    </TableHeader>
                    <tbody>
                    {users.map((user) => (
                        <TableRow key={user.email}>
                            <TableData>
                                <StyledLink to={`/users/${user._id}`}>{`${user.name} ${user.surname}`}</StyledLink>
                            </TableData>
                            <TableData>{user.email}</TableData>
                            <TableData>{user.hourlyRate}</TableData>
                            <TableData>{user.userRole}</TableData>
                        </TableRow>
                    ))}
                    </tbody>
                </StyledTable>
            </TableWrapper>
        </div>
    );
}

export default UsersPage;