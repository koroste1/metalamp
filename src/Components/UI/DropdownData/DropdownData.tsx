import React, {FC, useState} from 'react';
import classes from './DropdownData.module.scss';

type DropdownDataProps = {
    name: string;
    id: string;
}

const DropdownData: FC<DropdownDataProps> = ({name, id}) => {

    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setValue(e.target.value);
    }



    return (
            <input type="date" name={name} id={id} className={classes.data} value={value} onChange={handleChange} max={'2099-12-31'}/>

    );
};

export default DropdownData;