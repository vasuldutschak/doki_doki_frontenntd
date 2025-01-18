import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #1e1e1e;
`;

const LoginCard = styled.div`
    background-color: #2c2c2c;
    border-radius: 10px;
    padding: 30px 40px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    color: white;
`;

const LoginTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #27ae60;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Вирівнювання по лівому краю */
`;

const Label = styled.label`
    font-size: 14px;
    margin-bottom: 5px;
    color: #ddd;
`;

const Input = styled.input`
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    color: black;
    outline: none;
    width: 100%;
`;

const LoginButton = styled.button`
    padding: 10px;
    background-color: #27ae60;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #1abc9c;
    }

    &:disabled {
        background-color: #aaa;
        cursor: not-allowed;
    }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: left; /* Вирівнювання тексту помилки ліворуч */
`;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await axios.post(
                'https://doki-doki-three.vercel.app/api/v1/auth/login',
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            const { token } = response.data;
            localStorage.setItem('token', token);
            window.location.href = '/dashboard';
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <LoginWrapper>
            <LoginCard>
                <LoginTitle>Login</LoginTitle>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Form onSubmit={handleLogin}>
                    <FormGroup>
                        <Label>Email:</Label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password:</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </FormGroup>
                    <LoginButton type="submit" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                    </LoginButton>
                </Form>
            </LoginCard>
        </LoginWrapper>
    );
};

export default LoginForm;
