import React, {FC, useState} from 'react';
import classes from './DropdownData.module.scss';

type DropdownDataProps = {
    name: string;
    id: string;
    text:string;
}

const DropdownData: FC<DropdownDataProps> = ({name, id,text}) => {

    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setValue(e.target.value);
    }



    return (
        <label htmlFor={id} className={classes.label}>{text}
            <input type="date" name={name} id={id} className={classes.data} value={value} onChange={handleChange} max={'2099-12-31'}/>
        </label>
    );
};

export default DropdownData;