import React, { useRef, useState } from 'react'
import './header.css'
import CTA from './CTA'

import ME1 from '../../assets/me3.png'
import HeaderSocial from './HeaderSocial'
import m from '../../assets/test.mp3'
import SoundBar from './sound'


const Header = () => {


    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if (!click) {
            ref.current.play();
        } else {
            ref.current.pause();
        }


    }


    return (

        <header >
            {/* <div className="new" onClick={() => handleClick()}>



                <div className="container__music">

                    <div class="center">
                        <div class="wave" click={click}></div>
                        <div class="wave" click={click}></div>
                        <div class="wave" click={click}></div>
                        <div class="wave" click={click}></div>
                        <div class="wave" click={click}></div>
                        <div class="wave" click={click}></div>
                        <div class="wave" click={click}></div>
                        <div class="wave" click={click}></div>
                        <div class="wave" click={click}></div>
                        <div class="wave" click={click}></div>
                        <audio src={m} loop />
                    </div>
                </div>
            </div> */}

            <SoundBar />

            <div className="container header__container">
                <div>
                    <h5>Hello  I'm</h5>
                    <h1 className='h1size'>Abinesh Ragavan</h1>
                    <h5>Full Stack Developer</h5>
                    <q className='quotes'>People Experience People Differently</q>


                    <div className="container">
                        <div className="text">


                        </div>
                    </div>
                    <CTA />
                    <HeaderSocial />

                </div>
                <div className="me">
                    <img src={ME1} alt="me" />
                </div>

                <a href="#about" className='scroll__down'>Scroll Down</a>

            </div>
        </header >
    )
}

export default Header