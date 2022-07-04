import React from 'react'
import './navbar.css';

const Navbar = () => {

    return (
        <div class='search-bar'>
            <div class='search-input'>
                <img src={process.env.PUBLIC_URL + '/search.svg'}/>
                <input class='search-text' type='text' placeholder='Search..' />
            </div>
        </div>
    )
}

export default Navbar;