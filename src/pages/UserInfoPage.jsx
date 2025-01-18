import {useParams} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import PageLoader from "../loaders/PageLoader.jsx";

const UserInfoContainer = styled.div`
  background-color: #1a1a1a;
  color: #b0e57c;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  margin: 20px auto;
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #333;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const UserAvatar = styled.div`
  background-color: #4caf50;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const UserDetails = styled.div`
  h2 {
    color: #a8d09d;
  }
  p {
    margin: 5px 0;
    font-size: 16px;
  }
`;

const LoadingText = styled.div`
  color: #ffffff;
  text-align: center;
  font-size: 24px;
  margin-top: 50px;
`;

const ErrorText = styled.div`
  color: red;
  text-align: center;
  font-size: 24px;
  margin-top: 50px;
`;

function UserInfoPage() {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams()
    const token = localStorage.getItem('token');

    useEffect(() => {
        // Отримуємо дані про користувача з API
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://doki-doki-three.vercel.app/api/v1/users/${id}`,{
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserData(response.data);
            } catch (err) {
                setError('Failed to fetch user data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [id]);

    if (isLoading) {
        return <PageLoader/>;
    }

    if (error) {
        return <ErrorText>{error}</ErrorText>;
    }

    if (!userData) {
        return <ErrorText>User data not found</ErrorText>;
    }

    return (
        <UserInfoContainer>
            <UserHeader>
                <UserAvatar />
                <UserDetails>
                    <h2>{userData.name} {userData.surname}</h2>
                    <p>Email: {userData.email}</p>
                    <p>Role: {userData.userRole}</p>
                    <p>Hourly Rate: ${userData.hourlyRate}</p>
                    <p>Status: {userData.isVerified ? 'Verified' : 'Not Verified'}</p>
                </UserDetails>
            </UserHeader>
        </UserInfoContainer>
    );
}

export default UserInfoPage;