import PropTypes from 'prop-types';
import { FaTimes, FaBars } from 'react-icons/fa';
import styled from "styled-components";

const TriggerContainer = styled.div`
    position: fixed;
    top: 60px;
    left: 0; /* Початкове положення тригера */
    width: 50px;
    height: 50px;
    background-color: #1db954;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 8px; /* Квадратний стиль */
    border-bottom-right-radius: 8px; /* Квадратний стиль */
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: left 0.3s ease, transform 0.2s ease;
    
    &.moved{
        left: 250px;
    }
    
    &:hover{
        transform: scale(1.1);
    }
`

const SidebarTrigger = ({ isOpen, toggleSidebar }) => {
    return (
        <TriggerContainer
            className={`${isOpen ? 'moved' : ''}`}
            onClick={toggleSidebar}
        >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </TriggerContainer>
    );
};

SidebarTrigger.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Визначає, чи відкрита бічна панель
    toggleSidebar: PropTypes.func.isRequired, // Функція для перемикання стану
};

export default SidebarTrigger;
