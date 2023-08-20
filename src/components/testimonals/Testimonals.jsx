import React from 'react'
import './testimonals.css'
import AV1 from '../../assets/avatar1.jpg'
import AV2 from '../../assets/avatar2.jpg'
import AV3 from '../../assets/avatar3.jpg'
import AV4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";



const data = [
    {
        avatar: AV1,
        name: 'tina snow',
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius odit quam, amet animi maiores error molestias doloremque excepturi Ipsam laudantium ex eum modi, inventore enim illum atque aperiam ea error"

    },

    {
        avatar: AV2,
        name: 'tina snow',
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius odit quam, amet animi maiores error molestias doloremque excepturi Ipsam laudantium ex eum modi, inventore enim illum atque aperiam ea error"

    },
    {
        avatar: AV3,
        name: 'tina snow',
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius odit quam, amet animi maiores error molestias doloremque excepturi Ipsam laudantium ex eum modi, inventore enim illum atque aperiam ea error"

    },
    {
        avatar: AV4,
        name: 'tina snow',
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius odit quam, amet animi maiores error molestias doloremque excepturi Ipsam laudantium ex eum modi, inventore enim illum atque aperiam ea error"

    },
]
const Testimonals = () => {


    return (
        <section id='testimonials'>
            <h5>Review the client </h5>
            <h2>Testimonials</h2>


            <Swiper className="container testimonials__container mySwiper"
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}


            >

                {

                    data.map(({ avatar, name, review }, index) => {
                        return (



                            <SwiperSlide key={index} className='testimonials'>
                                <div className="client__avatar">
                                    <img src={avatar} alt="avatar one" />

                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>

                            </SwiperSlide>


                        )

                    })
                }



            </Swiper>
        </section >
    )
}

export default Testimonals