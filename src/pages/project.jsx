import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase as WorkIcon} from "react-icons/fa";
import chat from '../assets/chat.jpg'
import movie from '../assets/movie.jpg'
import food from '../assets/food.jpg'
const Project = () => {
    return (
        <div id='project' className="mt-28">
            <h2 className="text-5xl"> Projects I Worked On</h2>
            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"

                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">ChatChrip</h3>
                    <img src={chat} />
                    <button className="btn btn-soft btn-warning">view more</button>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Movie-Menia</h3>
                    <img src={movie} />
                    <button className="btn btn-secondary">Secondary</button>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">SAVOURY</h3>
                    <img src={food} />
                    <button className="btn btn-soft btn-primary">Primary</button>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}
export default Project