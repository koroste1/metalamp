import React, {FC} from 'react';
import classes from './SubscriptionText.module.scss';

const SubscriptionText:FC = () => {
    return (
        <input type="email" className={classes.subscription}/>
    );
};

export default SubscriptionText;