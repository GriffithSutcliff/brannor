import React from 'react';
import logo from '../imgs/logo.png'
import planet from '../imgs/planet.svg'

const Header = () => {
    return (
        <div className='header'>
           <img className='logo' src={logo}></img>
           <input placeholder='Введите артикул товара...'></input>
           <div className='header-info'>
            <div>Компания</div>
            <div>Продукция</div>
            <div>Поддержка</div>
            <div>Где купить</div>
           </div>
           <button>Вход</button>
           <div className='lang'>
            <img src={planet}></img>
            <select>
                    <option>RU</option>
                    <option>EN</option>
            </select>
           </div>
        </div>
    );
};

export default Header;