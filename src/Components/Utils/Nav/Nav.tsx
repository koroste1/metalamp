import React from 'react';
import classes from './Nav.module.scss';



const Nav = () => {
    const active = true;
    return (
        <nav className={classes.nav}>
            <li className={`${classes.nav__item} ${active ? classes.enabled : ''}`}>First</li>
            <li className={classes.nav__item}>Second</li>
        </nav>
    );
};

export default Nav;