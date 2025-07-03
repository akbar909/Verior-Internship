import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);
  return (
    <div>
        <section className=" bg-gray-900 text-white py-20 h-screen flex items-center justify-center">
            <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-down">Hi there! Ghulam Akbar Here </h1>
            <p className="text-lg md:text-xl mb-8" data-aos="fade-up" data-aos-delay="200">I am a passionate developer with a love for creating beautiful and functional web applications.</p>
            <a href="#projects" className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300" data-aos="zoom-in" data-aos-delay="400">View Projects</a>
            </div>
        </section>
    </div>
  )
}

export default Hero