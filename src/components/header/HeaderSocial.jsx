import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FiDribbble } from 'react-icons/fi'



const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/abinesh-ragavan-6a5ba6272/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Abinesh-Ragavan?tab=repositories" target="_blank"> <BsGithub /></a>
            <a href="#" target="_blank"> <FiDribbble /></a>

        </div>
    )
}

export default HeaderSocial