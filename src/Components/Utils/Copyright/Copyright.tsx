import React from 'react';
import classes from './Copyright.module.scss';
import twitter from '../../../assets/twitter.svg';
import facebook from '../../../assets/facebook.svg';
import instagram from '../../../assets/instagram.svg';

const Copyright = () => {
    return (
        <div className={classes.copyright}>
                <p className={classes.copyright__text}>Copyright © 2018 Toxin отель. Все права защищены.</p>
                <div className={classes.copyright__social}>
                    <img src={twitter} alt="twitter"/>
                    <img src={facebook} alt="facebook"/>
                    <img src={instagram} alt="instagram"/>
            </div>
        </div>
    );
};

export default Copyright;