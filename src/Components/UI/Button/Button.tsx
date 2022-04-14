import React, {FC} from 'react';
import classes from './Button.module.scss';
type ButtonProps = {
    onClick:()=>void;
    text:string;
    type:"button" | "submit" | "reset" | undefined;
    disabled?:boolean;
}

const Button:FC<ButtonProps> = ({onClick, text,type,disabled}) => {
    return (
        <button className={classes.button} type={type} onClick={onClick} disabled={disabled}>{text}</button>
    );
};

export default Button;