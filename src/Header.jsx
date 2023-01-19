import React from 'react';
import logo from './Image/logo.png'
import './index.css'
const Header = () => {
    return (
        <div className='header'>

            <img src={logo} alt='logo' className='logo' />
            <h1 className='heading'>Keep Note</h1>

        </div>
    );
}
export default Header;

