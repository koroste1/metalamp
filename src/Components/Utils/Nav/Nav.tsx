import React from 'react';
import classes from './Nav.module.scss';
import expand from '../../../assets/expand_more.svg'



const Nav = () => {
    const active = true;
    return (
        <nav className={classes.nav}>
            <li className={`${classes.nav__item} ${active ? classes.enabled : ''}`}>О нас</li>
            <li className={classes.nav__item}>Услуги
                <img src={expand} alt=""/>
            </li>
            <li className={classes.nav__item}>Вакансии</li>
            <li className={classes.nav__item}>Новости</li>
            <li className={classes.nav__item}>Соглашения
                <img src={expand} alt=""/>
            </li>
        </nav>
    );
};

export default Nav;