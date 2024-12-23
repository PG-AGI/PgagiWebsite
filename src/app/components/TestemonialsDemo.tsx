import { AnimatedTestimonials } from "@/app/components/ui/animated-testimonials"; 

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://i.postimg.cc/wMH7NYxk/20241006-124542.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://i.postimg.cc/wMH7NYxk/20241006-124542.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://i.postimg.cc/wMH7NYxk/20241006-124542.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} autoplay />;
}
