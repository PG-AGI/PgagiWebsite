import React from 'react';
import { AnimatedTestimonialsDemo } from '../components/TestemonialsDemo';
import TestimonialCarousel from '../components/InfiniteTestimonial';
//import { InfiniteMovingCardsDemo } from '../components/InfiniteMovingCardsDemo';
const page = () => {
  return (
    <div>
        <AnimatedTestimonialsDemo />
        <TestimonialCarousel />
        
    </div>
  );
}

export default page;
