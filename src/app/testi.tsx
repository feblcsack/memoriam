import { AnimatedTestimonials } from "../components/ui/animated-testimonial";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "You're my favorite kind of night, so i love when you call unexpected",
      name: "The Weeknd",
      designation: "Earned It",
      src: "/testi1.jpg",
    },
    {
      quote:
        "You move like midnight thoughts—slow, deep, and impossible to forget.",
      name: "Darian Rhys",
      designation: "Soulwave Producer",
      src: "/testi2.jpg",
    },
    {
      quote:
        "Every glance you give feels like velvet on skin—soft, rare, unforgettable.",
      name: "Sera Nyx",
      designation: "Late Hour Lyricist",
      src: "/testi3.jpg",
    },
    {
      quote:
        "You’re the reason I believe in things that only happen after 2AM.",
      name: "Elio Cruz",
      designation: "Dream Architect",
      src: "/testi6.jpg",
    },
    {
      quote:
        "I don’t crave morning light, I crave you in the echo of moonlight.",
      name: "Noa Liris",
      designation: "Shadow Dancer",
      src: "/testi5.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
