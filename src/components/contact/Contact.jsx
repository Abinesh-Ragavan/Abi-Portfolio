
import './contact.css'

import { AiOutlineMail } from 'react-icons/ai'

import { AiFillLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dllt1o6', 'template_754pof8', form.current, 'HamZWCAKLiVL9-s2H')
        e.target.reset()

    };
    const handleclick = () => {

        alert("thanks")
    }
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
                        <a href="https://wa.me/+918072600696" target='_blank'>Propose Mwe </a>
                    </article>
                </div>



                <form ref={form} onSubmit={sendEmail}>

                    <input type="text" name='name' placeholder=' your  FullName' required />
                    <input type="email" name="email" placeholder='Email Burdha' required />
                    <textarea name="message" rows="7" placeholder='Share your Feelings' required></textarea>
                    <button type='submit' className='btn btn-primary newbtn' onClick={handleclick} >Send Message Burdha</button>
                </form>
            </div>





        </section>
    )
}

export default Contact