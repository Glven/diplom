import React, {useState} from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const clearShow = (value) => {
        const clearBtn = document.querySelector('.search__clear');
        if(value!==""){
            clearBtn.classList.add('search__clear--active');
        }
        else {
            clearBtn.classList.remove('search__clear--active');
        }
        setSearchValue(value);
    }
    const clearInput = () => {
        const clearBtn = document.querySelector('.search__clear');
        setSearchValue('');
        clearBtn.classList.remove('search__clear--active');
    }
    return (
        <div className="search">
            <input id={props.searchId} type="text" placeholder="Найти" className="search__input" onChange={(e)=>clearShow(e.target.value)} value={searchValue}/>
            <button type="submit" className="search__btn"><i className="fa fa-search" aria-hidden="true"></i></button>
            <span className="search__clear" onClick={clearInput}><i className="fa fa-times" aria-hidden="true"></i></span>
        </div>
    );
};
export default Search;