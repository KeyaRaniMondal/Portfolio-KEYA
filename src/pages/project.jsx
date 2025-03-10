import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase as WorkIcon } from "react-icons/fa";
import chat from '../assets/chat.jpg';
import movie from '../assets/movie.jpg';
import food from '../assets/food.jpg';
import { useNavigate } from "react-router";

const Project = () => {
    const navigate = useNavigate();

    const projects = [
        { id: "chat-chirp", title: "ChatChirp", img: chat,  description: "A real-time chat application." },
        { id: "movie-mania", title: "Movie-Mania", img: movie, description: "A movie streaming platform." },
        { id: "savoury", title: "SAVOURY", img: food, description: "A food delivery system." },
    ];

    return (
        <div id='project' className="mt-28">
            <h2 className="text-5xl text-white font-bold mb-20"> Projects I Worked On</h2>
            <VerticalTimeline>
                {projects.map((project) => (
                    <VerticalTimelineElement
                        key={project.id}
                        className="vertical-timeline-element--work"
                        date={project.date}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{project.title}</h3>
                        <img src={project.img} alt={project.title} className="w-full h-40 object-cover rounded-md" />
                        <button 
                            className="btn btn-soft btn-warning mt-3" 
                            onClick={() => navigate(`/project/${project.id}`)}
                        >
                            View More
                        </button>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Project;
