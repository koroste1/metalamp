import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from "./Components/UI/Button/Button";
import TextField from "./Components/UI/TextField/TextField";
import Dropdown from "./Components/UI/Dropdown/Dropdown";
import DropdownData from "./Components/UI/DropdownData/DropdownData";
import Radio from "./Components/UI/Radio/Radio";
import Toggle from "./Components/UI/Toggle/Toggle";
import FindRoom from "./Components/Utils/FindRoom/FindRoom";
import Header from "./Components/Utils/Header/Header";
import Footer from "./Components/Utils/Footer/Footer";
import Copyright from "./Components/Utils/Copyright/Copyright";

type value = {
    value: string;
    textValue: string;
}

function App() {

    const values: value[] = [
        {value: 'defaultValue', textValue: 'Choose one'},
        {value: 'first', textValue: 'first'},
        {value: 'second', textValue: 'second'},
        {value: 'third', textValue: 'third'}
    ]

    return (
        <div className="App">
            <Header/>
            {/*<Button*/}
            {/*    onClick={() => {}}*/}
            {/*    text='Click me'*/}
            {/*    type={"button"}/>*/}
            {/*<TextField*/}
            {/*    placeholder='Email'*/}
            {/*    id='textField'*/}
            {/*    name='textField'*/}
            {/*    onChange={(e) => {}}*/}
            {/*/>*/}
            {/*<Dropdown name='dropdown' id='dropdown' startValue='Change' values={values}/>*/}
            {/*<DropdownData name='data' id='data'/>*/}
            {/*<Radio id={'radio'} name={'radio'} labelText={'radio'}/>*/}
            {/*<Radio id={'radio1'} name={'radio'} labelText={'radio1'}/>*/}
            {/*<Toggle/>*/}
            <FindRoom/>
            <Footer/>
            <Copyright/>
        </div>

    );
}

export default App;
