import React from 'react';
import ellipse from '../imgs/ellipse.png'

const Frame4 = () => {
    return (
        <div className='frame-4'>
            <div className='shadow'></div>
            <div className='text'>
                <div className='h'>КОЛОДКИ</div>
                <div className='h-text'>
                КОЛОДКИ BRANNOR ЭТО КОМФОРТНОЕ И БЕЗОПАСНОЕ ВОЖДЕНИЕ
                </div>
                <button>Подробнее</button>
                <div className='context'>
                    <div>
                    <img src={ellipse}></img>
                    увеличенный срок службы тормозных дисков и колодок
                    </div>
                    <div>
                    <img src={ellipse}></img>
                    Увеличенная эффективность работы тормозных колодок
                    </div>
                    <div>
                    <img src={ellipse}></img>
                    Увеличение плавности торможения без потери эффективности
                    </div>
                    <div>
                    <img src={ellipse}></img>
                    Стабильные характеристики в широком диапазоне температур
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frame4;