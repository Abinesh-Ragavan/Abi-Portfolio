import React from 'react'
import './contact.css'

import { AiOutlineMail } from 'react-icons/ai'

import { AiFillLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
const contact = () => {
    return (

        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">


                    <article className="contact__option">
                        <AiOutlineMail className='contact__option-icon' />

                        <h4>Email</h4>
                        <h5>abineshragavan27@gmail.com</h5>
                        <a href="mailto:abineshragavan27@gmail.com" target='_blank'>send me a meesage</a>
                    </article>
                    <article className="contact__option">
                        <AiFillLinkedin className='contact__option-icon' />

                        <h4>Lineked In</h4>
                        <h5>Abinesh Ragavan</h5>
                        <a href="https://www.linkedin.com/in/abinesh-ragavan-6a5ba6272/" target='_blank'>send me a meesage</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />

                        <h4>Whatsapp</h4>
                        <h5>No Call</h5>
                        <a href="https://wa.me/+918072600696" target='_blank'>send me a meesage</a>
                    </article>
                </div>



                <form action="">

                    <input type="text" name='name' placeholder=' your  FullName' required />
                    <input type="email" name="email" placeholder='Emzail Burdha' required />
                    <textarea name="message" rows="7" placeholder='Share your Feelings'></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>





        </section>
    )
}

export default contact