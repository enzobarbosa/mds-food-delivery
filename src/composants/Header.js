import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Header.css'

class Header extends React.Component {

  render() {
    return (
        <div className="header">
            <img src='/images/logo.png' width="100px" height="60px"></img>
            <nav>
                <ul className="ul">
                    <li className="li">
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li>
                        <Link to='/restaurants'>Restaurants</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
  }
}

export default Header;
