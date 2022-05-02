import React from 'react';
import logo from '../../../assets/logo.svg';
import Nav from "../Nav/Nav";
import classes from './Header.module.scss';
import Button from "../../UI/Button/Button";
import HeaderAuth from "./HeaderAuth/HeaderAuth";

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt='Logotype'/>
            <div>
                <Nav/>
                <HeaderAuth isAuth={true} name='Юлий Цезарь'/>
            </div>
        </header>
    );
};

export default Header;