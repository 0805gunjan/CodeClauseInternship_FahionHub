import React, { useContext, useState } from 'react';
import './navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart-icon.jpg';
import { Link } from 'react-router-dom';
import { shopContext } from '../../Context/shopContext';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(shopContext);
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=''/>
                <p>FASHION HUB</p>
            </div>
            <ul className="nav-menu">
                <li  onClick={() => setMenu('shop')}>
                    <Link style={{textDecoration: 'none'}} to='/'>SHOP</Link>{menu === 'shop' ? <hr/> : <></>}
                </li>
                <li onClick={() => setMenu('mens')}>
                    <Link style={{textDecoration: 'none'}} to='/men'>MEN</Link>{menu === 'men' ? <hr/> : <></>} 
                </li>
                <li onClick={() => setMenu('women')}>
                    <Link style={{textDecoration: 'none'}} to='/women'>WOMEN</Link>{menu === 'women' ? <hr/> : <></>}
                </li>
                <li onClick={() => setMenu('kids')}>
                    <Link style={{textDecoration: 'none'}} to='/kid'>KIDS</Link>{menu === 'kid' ? <hr/> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
