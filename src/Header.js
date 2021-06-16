import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


function Header() {
    return (
        <div className="header">
            <img className="headerLogo" src="https://www.pngkey.com/png/full/254-2542390_placements-amazon-logo-2018.png" />

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
                <div className='headerCart'>
                    <ShoppingBasketIcon />
                    <span className='headerOptionLineTwo headerCartCount'>0</span>

                </div>
            </div>

        </div>
    )
}

export default Header
