import { TypeAnimation } from "react-type-animation";
import img from "../assets/k.jpg";
import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Banner = () => {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-5 bg-[#263441] px-5 md:px-16 lg:px-28 py-10">

            <div className="text-center md:text-left md:w-1/2 ">
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
                    Hello! I'm <br /> Keya Rani Mondal
                </h2>
                <TypeAnimation
                    sequence={[
                        "A Passionate Web Developer",
                        1000,
                        "Specialized in Frontend Development",
                        1000,
                        "A Problem Solver at Heart",
                        1000,
                    ]}
                    className="font-semibold grad "
                    speed={50}
                    style={{ fontSize: "1.5em" }}
                    repeat={Infinity}
                />
                <div>
                    <a href="https://drive.google.com/file/d/1V5XOvSxNMd5bZiMQh9f8HdZEiSgilfgd/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline text-lg mt-5 p-6 text-[#a3a5ac] rounded-full">Get Resume</button>
                    </a>
                    <div className="mt-10 ">
                        <button className="btn btn-circle mr-5 shadow-lg shadow-blue-500/70">
                            <Link to={'https://www.linkedin.com/in/keya-rani-mondal-75a707285/'}>
                                <FaLinkedin className="text-xl" />
                            </Link>

                        </button>
                        <button className="btn btn-circle mr-5 shadow-lg shadow-blue-500/70">
                            <Link to={'https://github.com/KeyaRaniMondal'}>
                                <FaGithubSquare className="text-xl" />
                            </Link>
                        </button>
                        <button className="btn btn-circle mr-5 shadow-lg shadow-blue-400/70">
                            <Link to={'https://www.facebook.com/keya.rani.mondal.2024'}>
                                <FaFacebook className="text-xl" />
                            </Link>
                        </button>
                        <button className="btn btn-circle shadow-lg shadow-blue-500/70">
                            <Link to={'https://x.com/kumari_keya'}>
                                <FaXTwitter className="text-xl" />
                            </Link>
                        </button>
                    </div>


                </div>

            </div>
            <div className="flex justify-center md:w-1/2 mt-8 md:mt-0">
                <img src={img} alt="Keya Rani Mondal" className="w-72 sm:w-96 md:w-[400px] lg:w-[500px] h-auto object-cover rounded-lg " />
            </div>
        </div>
    );
};

export default Banner;

