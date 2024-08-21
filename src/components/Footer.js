import React from 'react';
import logo from '../imgs/logo.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-info'>
                <img src={logo} className='logo'></img>
                <div className='line'></div>
                <div className='menu'>
                    <div>Контакты</div>
                    <div>Оплата</div>
                    <div>Доставка</div>
                    <div>Поддержка</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;