import React from 'react';
import classes from './Togle.module.scss';



const Toggle = () => {
    return (
        <label className={classes.toggle}>
            <input type='checkbox' className={classes.toggle__input}/>
            <span className={classes.toggle__span}></span>
        </label>
    );
};

export default Toggle;