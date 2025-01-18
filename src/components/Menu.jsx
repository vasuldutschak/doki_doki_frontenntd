import styled from "styled-components";
import menuConfig from "../configs/menuConfig.jsx";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const MenuStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        margin-bottom: 20px;
    }
`
const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 10px;

    &:hover, &.active {
        color: #1db954;
    }

    .menu-label {
        font-weight: 400;
    }

`


function Menu({toggleSidebar}) {

    return (
        <MenuStyled>
            {menuConfig.map((item) => (
                <li key={item.path}>
                    <NavLinkStyled to={item.path} onClick={toggleSidebar}>
                        {item.icon}
                        <span className="menu-label">{item.label}</span>
                    </NavLinkStyled>
                </li>
            ))}
        </MenuStyled>
    )
}

Menu.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
}

export default Menu;