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
}

const Dropdown: FC<DropdownProps> = ({name, id, startValue, values}) => {
    const [selectedValue, setSelectedValue] = useState<string|null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedValue(event.currentTarget.value);
    }

    return (
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
    );
};

export default Dropdown;