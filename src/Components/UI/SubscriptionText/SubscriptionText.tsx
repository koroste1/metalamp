import React, {FC} from 'react';
import classes from './SubscriptionText.module.scss';

type SubscriptionTextProps = {
    placeholder: string;
    id: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SubscriptionText: FC<SubscriptionTextProps> = ({placeholder, onChange, id, name}) => {
    return (
        <input
            type="email"
            className={classes.subscription}
            onChange={onChange}
            id={id}
            name={name}
            placeholder={placeholder}/>
    );
};

export default SubscriptionText;