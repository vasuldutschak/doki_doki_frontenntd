import {useState} from "react";
import styled from "styled-components";
import UserAvatar from "./UserAvatar.jsx";
import UserInfoSidebar from "./UserInfoSidebar.jsx";
import Menu from "./Menu.jsx";
import SidebarTrigger from "./SidebarTrigger.jsx";

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 1000;
`

const SiderbarStyled = styled.div`
    position: fixed;
    top: 0;
    left: -250px; /* Початкове положення */
    width: 250px;
    height: 100%;
    background-color: #333;
    color: white;
    transition: left 0.3s ease;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    padding: 20px;
    
    &.open{
        left: 0;
    }
`

const UserSection = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #444; /* Розділ для візуального відділення */
    margin-bottom: 20px;
`

function Sidebar() {
    const [isOpen,setIsOpen]=useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <SidebarContainer>
            <SiderbarStyled className={isOpen ? 'open' : ''}>
                <UserSection>
                    <UserAvatar/>
                    <UserInfoSidebar username={'Jon Doe'} role={'Admin'}/>
                </UserSection>
                <Menu toggleSidebar={toggleSidebar}/>
            </SiderbarStyled>
            <SidebarTrigger isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        </SidebarContainer>
    )
}

export default Sidebar;