import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { MdFolderShared } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'

const about = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>


            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="AboutImage" />
                    </div>

                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3 + year</small>

                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>200 + world wide</small>

                        </article>
                        <article className='about__card'>
                            <MdFolderShared className='about__icon' />
                            <h5>Projects</h5>
                            <small>10 + completed</small>

                        </article>

                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum, ad reiciendis magnam facere magni eaque soluta perferendis enim, debitis expedita tempora quisquam non provident dolore molestiae maiores! Nobis, quod.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
    )
}

export default about