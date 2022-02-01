import React from 'react';
import Cart from './Cart';
import './Header.css';
const Header = () => {
    return(

        <div className="container-fluid principal">
            <div className="row navwrapper">
                <a href="/" className="col-md-6 marca col-sm-12 ">DIO Shopping</a>
                <nav className="col-md-4">
                    <ul className="lista">
                        <li className="item"><a href="/">HOME</a></li>
                        <li className="item"><a href="/contato">CONTATO</a></li>
                        <Cart />
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;
