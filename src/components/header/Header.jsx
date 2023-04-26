import React from 'react'
import './header.css'
import CTA from './CTA'

import ME1 from '../../assets/me3.png'
import HeaderSocial from './HeaderSocial'


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <div>
                    <h5>Hello I'm</h5>
                    <h1>Abinesh Ragavan</h1>
                    <div class="container">
                        <div class="text"></div>
                    </div>
                    <CTA />
                    <HeaderSocial />

                </div>
                <div className="me">
                    <img src={ME1} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header