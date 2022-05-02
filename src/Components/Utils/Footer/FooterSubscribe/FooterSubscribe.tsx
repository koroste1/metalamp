import React from 'react';
import classes from "./FooterSubscribe.module.scss";
import SubscriptionText from "../../../UI/SubscriptionText/SubscriptionText";

const FooterSubscribe = () => {
    return (
        <section className={classes.footerSubscribe}>
            <h3 className={classes.footerSubscribe__caption}>Подписка</h3>
            <p className={classes.footerSubscribe__text}>Получайте специальные предложения и новости сервиса</p>
            <SubscriptionText
                name={'email'}
                placeholder={'Email'}
                id={'email'}
                onChange={() => {
                }}/>
        </section>
    );
};

export default FooterSubscribe;