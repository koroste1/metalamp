import React, {FC} from 'react';
import classes from './Radio.module.scss';

type RadioProps = {
    id:string;
    name:string;
    labelText:string;
    value:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{};
}

const Radio:FC<RadioProps> = ({id, name,labelText,value, onChange}) => {
    return (
        <label htmlFor={id} className={classes.radio}>
            <input type="radio"
                   id={id}
                   name={name}
                   className={classes.radio__input}
                   onChange={onChange}
                   value={value}
            />
            <span className={classes.radio__span}>{labelText}</span>
        </label>
    );
};

export default Radio;