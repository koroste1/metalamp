import React from 'react';
import classes from "./FooterDescription.module.scss";
import logo from "../../../../assets/logo.svg";

const FooterDescription = () => {

    return (
        <section className={classes.footerDescription}>
            <img src={logo} alt="logo"/>
            <p className={classes.footerDescription__text}>Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
                «Отельные взгляды»</p>
        </section>
    );
};

export default FooterDescription;