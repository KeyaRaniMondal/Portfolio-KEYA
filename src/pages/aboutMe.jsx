import { FaBook, FaBrain, FaPaintBrush } from 'react-icons/fa';
import img from '../assets/k.jpg'
const AboutMe = () => {
    return (
        <div id='about' className=" w-full bg-[#1A2A33] text-white py-16 px-5 md:px-16 lg:px-28">

            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-gradient">
                About Me
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-10">

                <div className="hidden md:flex md:w-1/3 justify-center -mt-40">
                    <img
                        src={img}
                        alt="Keya Rani Mondal"
                        className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-[#4A90E2]"
                    />
                </div>


                <div className="md:w-2/3 text-lg leading-relaxed">
                    <p className="mb-4 text-justify">
                        Hello! I’m <span className="font-bold text-[#4A90E2]">Keya Rani Mondal</span>, a
                        **dedicated Web Developer** and a 3rd-year CSE student. My journey into programming
                        began with curiosity about how websites function behind the scenes. Over time, I
                        found myself drawn to <span className="font-semibold text-[#FF9F43]">Front-End Development</span>,
                        where creativity meets logic to create stunning digital experiences.
                    </p>

                    <p className="mb-4 text-justify">
                        I specialize in <span className="font-semibold text-[#A29BFE]">HTML, CSS, JavaScript, React.js, express js, node js and NoSQL database Mongodb</span>,
                        focusing on responsive design and user-friendly interfaces. I thrive on solving complex
                        coding problems, optimizing performance, and bringing ideas to life through code.
                        **Continuous learning** is my passion, and I’m always eager to explore new
                        technologies in this ever-evolving industry.
                    </p>

                    <p className="mb-4 flex items-center text-justify">
                        <FaPaintBrush className="text-[#F39C12] text-2xl mr-3" />
                        <span>
                            Beyond coding, I have a variety of interests that keep me inspired. I enjoy **painting**,
                            which allows me to express creativity in a different medium.
                        </span>
                    </p>



                    <p className="mb-4 flex items-center text-justify">
                        <FaBrain className="text-[#e4b9b4] text-2xl mr-3" />
                        <span>
                            Additionally, I love tackling **problem-solving challenges**, as they sharpen my
                            analytical skills and push me to improve daily.
                        </span>
                    </p>

                    <p className='text-justify'>
                        At my core, I’m an **ambitious and detail-oriented** individual who enjoys collaborating
                        with like-minded people. Whether through coding, design, or brainstorming new ideas,
                        I strive to add value to every project I work on. I’m excited to **connect with fellow
                        developers**, share knowledge, and contribute to innovative tech communities! 🚀
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
