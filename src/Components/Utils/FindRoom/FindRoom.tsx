import React from 'react';
import DropdownData from "../../UI/DropdownData/DropdownData";
import Dropdown from "../../UI/Dropdown/Dropdown";

type value = {
    value: string;
    textValue: string;
}
const FindRoom = () => {

    const guestValue: value[] = [
        {
            value: 'guestValue',
            textValue: 'Сколько гостей'
        },
        {
            value: '1',
            textValue: '1'
        },
        {
            value: '2',
            textValue: '2'
        },
        {
            value: '3',
            textValue: '3'
        },
        {
            value: '4',
            textValue: '4'
        }
    ]


    return (
        <div>
            <h1>Найдем номера под ваши пожелания</h1>
            <DropdownData name='arrival' id='arrival' text='Прибытие'/>
            <DropdownData name='departure' id='departure' text='Выезд'/>
            <Dropdown name='count' id='count' startValue={'Сколько гостей'} values={guestValue} text='Гости'/>
        </div>
    );
};

export default FindRoom;