import '../App.css';
import React from 'react';

// Функция которая выдает html контейнер с строкой ввода и кнопкой
export const Input = ({setCitiesList}) => {
    const handleOnChange = (event) => {
        console.log('event', event);
        console.log('hendleOnChange');
        console.log('value is', event.target.value);
    };
    const handleOnClick = () => {
        setCitiesList(['New York']);
        console.log('handleOnClick');
    };
    return (
        <div className="SearchBar">
            <input className='Input'></input>
            <button className='Button' onClick={handleOnClick}>Add</button>
        </div>
    )
};
