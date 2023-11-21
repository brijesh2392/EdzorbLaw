import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from './TestimonialCard';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Neha Rajani',
      avatar: avatar1,
      testimony: 'Lorem ipsum, dolor sitdfdf met consectetur eladipicke cookset isicingit. Id, sapie nteamer...',
    },
    {
      name: 'Alisha Anand',
      avatar: avatar2,
      testimony: 'Lorem ipsum, dolor sitdfdf met consectetur eladipicke cookset isicingit. Id, sapie nteamer...',
    },
    {
      name: 'Shreyansh Tripathi',
      avatar: avatar3,
      testimony: 'Lorem ipsum, dolor sitdfdf met consectetur eladipicke cookset isicingit. Id, sapie nteamer...',
    },
    {
      name: 'Rakesh Sharma',
      avatar: avatar2,
      testimony: 'Lorem ipsum, dolor sitdfdf met consectetur eladipicke cookset isicingit. Id, sapie nteamer...',
    },
    {
      name: 'Mukesh Gupta',
      avatar: avatar3,
      testimony: 'Lorem ipsum, dolor sitdfdf met consectetur eladipicke cookset isicingit. Id, sapie nteamer...',
    },
    {
      name: 'irvin cyrus',
      avatar: avatar1,
      testimony: 'Lorem ipsum, dolor sitdfdf met consectetur eladipicke cookset isicingit. Id, sapie nteamer...',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='max-w-[1240px] mx-auto mt-16 px-10'>
      <h1 className='text-3xl font-bold text-center'> Testimonials </h1>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} name={testimonial.name} avatar={testimonial.avatar} testimony={testimonial.testimony} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
