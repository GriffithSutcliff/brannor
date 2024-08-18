import React from 'react';

const Search = () => {
    return (
        <div className='search'>
            <div className='search-menu'>
                <div className='selectors'>
                    <select>
                            <option disabled selected>марка</option>
                            <option>EN</option>
                    </select>
                    <select>
                            <option disabled selected>Модель</option>
                            <option>EN</option>
                    </select>
                    <select>
                            <option disabled selected>Год</option>
                            <option>EN</option>
                    </select>
                    <select>
                            <option disabled selected>Комплектация</option>
                            <option>EN</option>
                    </select>
                </div>
                    <button>Поиск по катологу</button>
            </div>
        </div>
    );
};

export default Search;