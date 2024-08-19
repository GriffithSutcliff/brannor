import React from 'react';
import pads from '../imgs/pads.png'

const Frame2 = () => {
    return (
        <div className='frame-2'>
            <div className='circle'></div>
            <img className='pads' src={pads}></img>
            <div className='frame-2-text'>
                <div className='h'>ТОВАРЫ</div>
                <div className='context'>ДИСКИ И КОЛОДКИ BRANNOR ЭТО ВЫСОКОТЕХНОЛОГИЧНЫЙ И МАКСИМАЛЬНО ЭФФЕКТИВНЫЙ ПРОДУКТ</div>
                <button>увеличение плавности торможения без потери эффективности</button>
                <div className='group'>
                    <button>увеличенный срок службы</button>
                    <button>увеличинная эффективность работы</button>
                </div>
                <button>стабильные характеристики в широком диапазоне температур</button>
            </div>
        </div>
    );
};

export default Frame2;