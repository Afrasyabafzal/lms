import React from "react";
import './Aboutus.css'
import AVTR1 from '../assests/img/afra.jpeg'
import AVTR2 from '../assests/img/hamza.jpeg'
import AVTR3 from '../assests/img/hassan.jpeg'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Michael Holdings',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo autem'
    },

    {
        avatar: AVTR2,
        name: 'Jasmine Jordan',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo autem'
    },

    {
        avatar: AVTR3,
        name: 'Mathew Jade',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo autem'
    },

]

const Aboutus = () => {
return (
    <section id='aboutus'>
        <h5>Reviews From Clients</h5>
        <h2>About US</h2>
        <Swiper className="container aboutus__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
            {
                data.map (({avatar,name,review},index) =>
                {
                    return(
                    <SwiperSlide key={index} className="aboutus">
                    <div className="client__avatar">
                        <img src={avatar} alt="Avatar one" />
                    </div>
                    <h5 className="client__name">{name}</h5>
                        <small className="client__review">{review}
                        </small>
                </SwiperSlide>)
                }
                )
            }

        </Swiper>
    </section>
)
}
export default Aboutus