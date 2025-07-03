const Contact = () => {
    return (
        <div id='contact'>
            <section className="bg-gray-900 text-white py-20 h-screen flex items-center justify-center">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Contact Me</h2>
                    <p className="text-lg md:text-xl mb-8">Feel free to reach out for any inquiries or collaborations.</p>
                    <a
                        href="mailto:jamaliakbar909@gmail.com"
                        className="bg-gray-700 hover:bg-gray-600 delay-150 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg 
                        hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 inline-block animate-bounce"

                    >
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Contact