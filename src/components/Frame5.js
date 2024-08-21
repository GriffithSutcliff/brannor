import { useState, React } from 'react';
import neon from '../imgs/neon-disk.png'
import Slider from './Slider';

function Frame5() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    return (
        <div className='frame5-background'>
            <div className='red-shadow'></div>
            <div className='frame-5'>
                <img className='neon' src={neon}></img>
                <Slider currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
            </div>
        </div>
    );
}

export default Frame5;