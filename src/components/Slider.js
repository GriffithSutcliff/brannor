import React from 'react';

function Slider({ currentSlide, setCurrentSlide }) {

  // Массив слайдов с содержимым
  const slides = [
    {
      subtitle: "МАТЕРИАЛЫ",
      description: "Керамический фрикционный материал, обеспечивающий высокую динамику начального торможения и длительные эксплуатационные характеристики"
    },
    {
      subtitle: "Дизайн",
      description: "Совершенно новый дизайн тормозных роторов для увеличенной долговечности, надежности и производительности"
    },
    {
      subtitle: "Качество",
      description: "100% контроль качества всех тормозных компонентов"
    },
    {
      subtitle: "ПОДХОД",
      description: "Избирательный и тщательный подход к выбору материалов, основанный на самых передовых стандартах современной автомобильной промышленности"
    },
    {
      subtitle: "ПРОИЗВОДСТВО",
      description: "Применение высокоточных современных автоматизированных станков для высочайшего качества конечной продукции"
      },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

    return (
        <div className='slider'>
            <div>
                <div className='slide'>
                    <h1>ВАШИ ОЩУЩЕНИЯ НА ДОРОГАХ В НАШИХ РУКАХ</h1>
                    <h2>{slides[currentSlide].subtitle}</h2>
                    <p>{slides[currentSlide].description}</p>
                </div>
                <div className='buttons'>
                    <button onClick={prevSlide} style={{ marginRight: '10px' }}>Назад</button>
                    <button onClick={nextSlide}>Вперед</button>
                </div>
            </div>
        </div>
    );
}

export default Slider;