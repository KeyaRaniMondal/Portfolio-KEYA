import { TypeAnimation } from "react-type-animation";
import img from "../assets/k.jpg";

const Banner = () => {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-5 bg-[#263441] px-5 md:px-16 lg:px-28 py-10">

            <div className="text-center md:text-left md:w-1/2 ">
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
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
                    className="font-semibold grad"
                    speed={50}
                    style={{ fontSize: "1.5em" }}
                    repeat={Infinity}
                />
            </div>
            <div className="flex justify-center md:w-1/2 mt-8 md:mt-0">
                <img src={img} alt="Keya Rani Mondal" className="w-72 sm:w-96 md:w-[400px] lg:w-[500px] h-auto object-cover rounded-lg " />
            </div>
        </div>
    );
};

export default Banner;

