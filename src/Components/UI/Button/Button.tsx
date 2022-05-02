import React, {FC} from 'react';
import classes from './Button.module.scss';
type ButtonProps = {
    onClick:()=>void;
    text:string;
    type:"button" | "submit" | "reset" | undefined;
    painted:boolean;
    disabled?:boolean;
}

const Button:FC<ButtonProps> = ({onClick, text,painted, type,disabled}) => {
    return (
        <button className={`${classes.button} ${painted ? classes.button_painted_true : classes.button_painted_false}`}
                type={type}
                onClick={onClick}
                disabled={disabled}>{text}</button>
    );
};

export default Button;