import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="headerLogo" src="https://www.pngkey.com/png/full/254-2542390_placements-amazon-logo-2018.png" />
            </Link>

            <div className="headerSearch">
                <input className="headerSearchInput" type="text" />
                <SearchIcon className='headerSearchIcon' />
            </div>

            <div className="headerNav">
                <div className='headerOption'>
                    <span className='headerOptionLineOne'>Hello Guest</span>
                    <span className='headerOptionLineTwo'>Sign In</span>
                </div>
                <div className='headerOption'>
                    <span className='headerOptionLineOne'>Return</span>
                    <span className='headerOptionLineTwo'>& Orders</span>
                </div>
                <div className='headerOption'>
                    <span className='headerOptionLineOne'>Your</span>
                    <span className='headerOptionLineTwo'>Prime</span>
                </div>

                <Link to="/checkout">
                    <div className='headerCart'>
                        <ShoppingBasketIcon />
                        <span className='headerOptionLineTwo headerCartCount'>0</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
