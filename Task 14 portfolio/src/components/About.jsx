import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        AOS.init({ once: true, duration: 1000 });
    }, []);
    return (
        <div id='about' className="bg-gray-900">
            <section className="container mx-auto  text-white py-20 min-h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    <div className="md:w-1/2 text-center md:text-left" data-aos="fade-up">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">About Me</h2>
                        <p className="text-lg md:text-xl mb-8">I am a passionate developer with a love for creating beautiful and functional web applications.</p>
                        <a href="#projects" className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">View Projects</a>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-8 md:mt-0" data-aos="fade-up">
                        <img src="/src/assets/profile.png" alt="Profile" className="w-56 h-56 object-cover rounded-lg shadow-lg border-4 border-gray-600" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About