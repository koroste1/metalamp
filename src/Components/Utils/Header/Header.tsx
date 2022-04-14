import React from 'react';
import logo from '../../../assets/logo.svg';
import Nav from "../Nav/Nav";
import classes from './Header.module.scss';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt='Logotype'/>
            <Nav/>
        </header>
    );
};

export default Header;