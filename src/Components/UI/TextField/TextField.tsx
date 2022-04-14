import React, {FC} from 'react';
import classes from './TextField.module.scss';

type TextFieldProps = {
    placeholder:string;
    id:string;
    name:string;
    onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;

}

const TextField:FC<TextFieldProps> = ({placeholder, onChange, id, name}) => {
    return (
        <input
            type="text"
            className={classes.textField}
            onChange={onChange}
            id={id}
            name={name}
            placeholder={placeholder}
        />
    );
};

export default TextField;