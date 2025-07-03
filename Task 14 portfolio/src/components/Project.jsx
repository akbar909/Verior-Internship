import projectImage from '../assets/project.png';
const Project = () => {
    const projects = [
        {
            title: 'Social Media App',
            description: 'Build a social media application with features like user profiles, posts, and comments.',
            image: projectImage,

        },
        {
            title: 'Portfolio Builder',
            description: 'Create a portfolio website to showcase your projects and skills.',
            image: projectImage,

        },
        {
            title: 'E-learning Platform',
            description: 'Develop an e-learning platform with features like course management, quizzes, and user profiles.',
            image: projectImage,

        },
    ];

    return (
        <div id='projects'>
            <section className="bg-gray-900 text-white py-20 h-screen flex items-center justify-center ">
                <div className="container mx-auto text-center p-4">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">My Projects</h2>
                    <p className="text-lg md:text-xl mb-8">Here are some of the projects I have worked on.</p>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 hover:scale-105 transition-transform duration-300">
                        {projects.map((project, id) => (
                            <div
                                key={id}
                                className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-gray-700 cursor-pointer will-change-transform"
                            >
                                <img src={project.image} alt={project.title} className=" w-full h-48 object-cover rounded-lg mb-4 transition duration-300 hover:brightness-90" />
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400">{project.description}</p>
                            </div>

                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Project