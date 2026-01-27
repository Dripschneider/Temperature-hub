import '../App.css';
import React from 'react';

export const Card = () => (
    <div className="Card">
        <div className='MainInfo'>
            <img className='Icon' src='https://avatars.mds.yandex.net/i?id=2a00000179eb87964dd3ed5d8f4c5458343f-4518983-images-thumbs&n=13http://www.w3.org/2000/svg'></img>
            <div className='Title'>New Yourk</div>
            <div className='Description'>Cloudy</div>
            <div className='Temperature'>20</div>
        </div>
        <div className='Information'>
            <div>Humidity: 15</div>
            <div>Feels like: 19</div>
        </div>
    </div>
);
