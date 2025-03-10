import { NavLink, useParams } from "react-router";
import chat from '../assets/chat.jpg';
import movie from '../assets/movie.jpg';
import food from '../assets/food.jpg';
import { FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const ProjectDetail = () => {
    const { id } = useParams();

    const projectData = {
        "chat-chirp": {
            title: "ChatChirp",
            img: chat,
            description: "ChatChirp is a real-time chat application with features like group chat, file sharing, and end-to-end encryption.",
            technologies: [<FaReact />, <IoLogoFirebase />, <SiMongodb />, <SiExpress />, <FaNode />],
            'link': "https://forum-client-c31be.web.app/",
            'github': "https://github.com/KeyaRaniMondal/ChatChrip",
            improvements: "I will work more on making UI more apealing to eyes and add feaure after successfull payments."
        },
        "movie-mania": {
            title: "Movie-Mania",
            img: movie,
            description: "Movie-Mania is a movie streaming platform where users can watch and review movies in HD quality.",
            technologies: [<FaReact />, <IoLogoFirebase />, <SiMongodb />, <SiExpress />, <FaNode />],
            'link': "https://movie-4dfed.web.app/",
            'github': "https://github.com/KeyaRaniMondal/movie-portal-client",
            improvements: "I will try to add payment system for first day first show."
        },
        "savoury": {
            title: "SAVOURY",
            img: food,
            description: "SAVOURY is a food delivery system that connects users with local restaurants, offering real-time order tracking.",
            technologies: [<FaReact />, <IoLogoFirebase />, <SiMongodb />, <SiExpress />, <FaNode />],
            'link': "https://food-sharing-1d765.web.app/",
            'github': "https://github.com/KeyaRaniMondal/food_sharing_client",
            improvements: "Will add features to view recipe ."
        }
    };

    const project = projectData[id];

    if (!project) {
        return <div className="text-center mt-20 text-3xl">Project not found!</div>;
    }

    return (
        <div>
            <NavLink to={'/'} className='text-2xl text-white'>About Me</NavLink>
            <div className="max-w-4xl mx-auto mt-16 p-6 bg-gray-800 text-white rounded-lg">
                <h2 className="text-4xl font-bold">{project.title}</h2>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={project.img}
                            class="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">

                        </div>
                    </div>

                </div>

                <p className="mt-4">{project.description}</p>
                <h3 className="mt-6 text-2xl font-semibold">Technologies Used:</h3>
                <div className="flex gap-5 flex-wrap mt-10 ml-48">
                    {project.technologies.map((tech, index) => (
                        <p key={index} className="text-5xl mr-10">{tech}</p>
                    ))}
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-6 text-blue-400 hover:underline"
                >
                    Live Wrbsite Link
                </a>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-6 text-blue-400 hover:underline"
                >
                    View on GitHub
                </a>
                <h2 className="text-xl  mt-5">Potential improvements and future plans for the project:</h2>
                <p className=" text-[#918888]">{project.improvements}</p>
            </div>
        </div>

    );
};

export default ProjectDetail;
