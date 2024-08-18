import React from 'react';
import logo from '../imgs/3d-logo.png'

const Frame1 = () => {
    return (
        <div className='frame-1'>
            <img src={logo}></img>
            <div className='frame-1-h'>
            <span>BRANNOR</span> - ПРОДУКТ НОВОЙ ЭПОХИ
            </div>
            <div className='frame-1-text'>
            Лучшие фрикционные материалы для тормозных колодок и дисков, основанные на самых передовых стандартах современной автомобильной промышленности
            </div>
            <button>Узнать больше о компании</button>
        </div>
    );
};

export default Frame1;