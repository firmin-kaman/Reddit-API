import React from 'react';
import './Header.css';

export default function Header() {
  return (
    // Ceci represente l'en tête (header) de la section post.
    <div className='header'>
        <div className='header__left'>
            <ul>
                <li><a href="/r/popular" class='active'>Popular</a></li>
                <li><a href="/r/hot">Hot</a></li>
                <li><a href="/r/rising">Rising</a></li>
                <li><a href="/r/controversial">Controversial</a></li>
                <li><a href="/r/gilded">Gilded</a></li>
            </ul>
        </div> {/*Voiçi nos onglets au dessus */}

        <div className='header__right'>
            <i className="fas fa-bell"></i>
            <img src="../vecteezy_man-avatar-vector-icon_6487917.jpg" alt='' />
            <div className="header__user">
                <span> Bryant Kaman </span>
                <i className="fas fa-caret-down"></i>
            </div>
        </div> {/* Voiçi les Infos Utilisateurs au dessus */}
    </div>
  )
}
