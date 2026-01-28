import logo from './logo.svg';
import './App.css';
import { Input } from './input/input.js';
import { Card } from './Card/card.js';
import { useState } from 'react';

function App() {
  const [inputValue, setCitiesList] = useState(['New York', 'Kyiv', 'London']); // useState возвращает массив из 2 элеменов, где первый элемент это значение по умолчанию, а второй это функция для изменения. При вызове этой функции тригерит рендер.
  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList}/>
      <div className='CardList'>
      </div>
    </div>
  );
}

export default App;