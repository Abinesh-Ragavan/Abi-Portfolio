import React from 'react'
import './Loader.css'
import AnimatedLogo from '../../assets/logo-animated.gif'
const Loader = () => {


    return (
        <div>
            <div className="loader">
                <img className="logo" src={AnimatedLogo} alt="Iphone loader" />


            </div>

        </div>

    )
}

export default Loader