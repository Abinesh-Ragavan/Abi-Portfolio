import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FiDribbble } from 'react-icons/fi'



const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="#" target="_blank"><BsLinkedin /></a>
            <a href="#" target="_blank"> <BsGithub /></a>
            <a href="#" target="_blank"> <FiDribbble /></a>

        </div>
    )
}

export default HeaderSocial