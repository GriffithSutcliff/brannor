import React from 'react';
import stick1 from '../imgs/stick1.png'
import stick2 from '../imgs/stick2.png'
import stick3 from '../imgs/stick3.png'
import stick4 from '../imgs/stick4.png'
import disk from '../imgs/disk.png'

const Frame3 = () => {
    return (
        <div className='frame-3'>
            <div className='h'>ДИСКИ</div>
            <div className='h1'>ВЫСОКАЯ ТЕРМОСТОЙКОСТЬ</div>
            <div className='h1-text'>Высокоуглеродистый чугун обладает более высокой теплоемкостью и прочностью, 
                что позволяет ему эффективнее справляться с нагревом и избегать температурной деформации.</div>
            <div className='h2'>СТОЙКОСТЬ К ИЗНОСУ</div>
            <div className='h2-text'>Все тормозные диски Brannor имеют обязательную износоустойчивую маркировку, 
                на которой указан максимально допустимый износ, что позволяет упростить процесс оценки износа тормозного диска.</div>
            <div className='h3'>УЛУЧШЕННЫЙ ТЕПЛООБМЕН</div>
            <div className='h3-text'>несквозная перфорация сложной формы обеспечивает увеличение коэффициента трения 
                и создает аэродинамические потоки воздуха для лучшего охлаждения, не жертвуя при этом прочностью материала и снижением термальной массы.</div>
            <div className='h4'>ВЫСОЧАЙШАЯ ЗАЩИТА ОТ КОРРОЗИИ</div>
            <div className='h4-text'>Цинконаполненное полимерное покрытие обеспечивает выдающиеся характеристики в 
                течение всего срока использования и позволяет защитить нерабочие элементы тормозного диска от коррозии и воздействия агрессивной среды.</div>
            <img className='stick1' src={stick1}></img>
            <img className='stick2' src={stick2}></img>
            <img className='stick3' src={stick3}></img>
            <img className='stick4' src={stick4}></img>
            <img className='disk' src={disk}></img>
        </div>
    );
};

export default Frame3;