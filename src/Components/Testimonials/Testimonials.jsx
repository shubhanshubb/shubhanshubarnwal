import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Angel Brocks',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam , commodi velit porro blanditiis consequatur qui molestiae . Dolorem , perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores leserunt explicabo nostrum ducimus quasi ?',
  },
  {
    avatar: AVTR2,
    name: 'Urban Brothers',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam , commodi velit porro blanditiis consequatur qui molestiae . Dolorem , perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores leserunt explicabo nostrum ducimus quasi ?',
  },
  {
    avatar: AVTR3,
    name: 'Ammy Bakery',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam , commodi velit porro blanditiis consequatur qui molestiae . Dolorem , perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores leserunt explicabo nostrum ducimus quasi ?',
  },
  {
    avatar: AVTR4,
    name: 'Jubilant Foods',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam , commodi velit porro blanditiis consequatur qui molestiae . Dolorem , perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores leserunt explicabo nostrum ducimus quasi ?',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviw from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className="testimonials">
                <div className="client_avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
          <h5 className="client_name">{name}</h5>
            <small className="client_review">{review}</small>
        </SwiperSlide>
            )
          })
        }
                
      </Swiper>
    </section>

  )
}

export default Testimonials
