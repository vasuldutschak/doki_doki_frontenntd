import styled from "styled-components";
import PropTypes from 'prop-types';

const UserInfoContainer = styled.div`
    h4 {
        margin: 0;
        color: white;
        font-size: 18px;
    }
    p {
        margin: 5px 0 0 0;
        color: #bbb;
        font-size: 14px;
    }
`

function UserInfoSidebar({username,role}) {
    return (
        <UserInfoContainer>
            <h4>{username}</h4>
            <p>{role}</p>
        </UserInfoContainer>
    )
}

UserInfoSidebar.propTypes = {
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
}

export default UserInfoSidebar;