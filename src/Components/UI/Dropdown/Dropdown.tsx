import React, {FC, useState} from 'react';
import classes from './Dropdown.module.scss';

type value = {
    value: string;
    textValue: string;
}

type DropdownProps = {
    name: string;
    id: string;
    startValue: string
    values: value[];
    text:string;
}

const Dropdown: FC<DropdownProps> = ({name, id, startValue, values, text}) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedValue(event.currentTarget.value);
    }

    return (
        <label htmlFor={id} className={classes.label}>{text}
            <select name={name}
                    id={id}
                    className={classes.dropdown}
                    defaultValue={values[0].value}
                    onChange={handleChange}
            >
                {values.map((value, index) =>
                    <option
                        key={value.value}
                        value={value.value}
                        className={classes.dropdown__option}
                        disabled={index === 0 ? true : false}
                    >{value.textValue}</option>
                )}
            </select>
        </label>
    );
};

export default Dropdown;