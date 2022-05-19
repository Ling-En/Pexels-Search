import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const Search = ({search, setInput}) => {
    const currPath = new URL(window.location.href);
    const pathName = currPath.pathname === '/video' ? '影片' : '相片';
    const handleInput = (e) => {
        setInput(e.target.value);
    };

    return (
        <section className="search">
            <div className="container">
                <h4>PEXELS SEARCH</h4>
                <div className="input-group">
                    <input onChange={handleInput} type="text" className="form-control" placeholder={`搜尋免費${pathName}`} />
                    <span className="input-group-text">
                        <button onClick={search} type="button"><span><BiSearchAlt2 />搜尋</span></button>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Search;
