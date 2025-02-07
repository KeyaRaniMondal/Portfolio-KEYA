import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import js from '../assets/js.jpg'
import react from '../assets/react.jpg'
import git from '../assets/git.jpg'
import github from '../assets/github.jpg'
import vscode from '../assets/vscode.jpg'
import figma from '../assets/figma.jpg'
import node from '../assets/node.jpg'
import express from '../assets/express.jpg'
import mongodb from '../assets/mongodb.jpg'
const Skills = () => {
    return (
        <div className='w-full bg-[#13232c] text-white py-16 px-5 md:px-16 lg:px-28'>
            <h2 className="text-5xl font-bold text-white mt-28">My Skill-Set</h2>
            <h2 className="text-3xl text-left mt-32 text-white mb-10">Frontend Development</h2>
            <div className="flex justify-around gap-5">
            <div className=" w-96  image-full   transform hover:scale-105 transition-transform duration-300">
                <figure>
                    <img
                        src={html}
                        alt="Shoes" className='h-40'/>
                </figure>            
            </div>
            <div className=" w-96 image-full   transform hover:scale-105 transition-transform duration-300">
                <figure>
                    <img
                        src={css}
                        alt="Shoes" className='h-40'/>
                </figure>            
            </div>
            <div className="w-96  image-full   transform hover:scale-105 transition-transform duration-300">
                <figure>
                    <img
                        src={js}
                        alt="Shoes" className='h-40 w-96'/>
                </figure>            
            </div>
            <div className="w-96  image-full   transform hover:scale-105 transition-transform duration-300">
                <figure>
                    <img
                        src={react}
                        alt="Shoes" className='h-40 w-96'/>
                </figure>            
            </div>
            
            </div>
            <h2 className="text-3xl text-left mt-32 text-white mb-10">Backend & Database</h2>
            <div className="flex justify-around gap-5">
            <div className=" w-96  image-full   transform hover:scale-105 transition-transform duration-300">
                <figure>
                    <img
                        src={node}
                        alt="Shoes" className='w-96 h-48'/>
                </figure>            
            </div>
            <div className=" w-96 image-full   transform hover:scale-105 transition-transform duration-300">
                <figure>
                    <img
                        src={express}
                        alt="Shoes" className='h-48 w-96'/>
                </figure>            
            </div>
            <div className="w-96  image-full   transform hover:scale-105 transition-transform duration-300">
                <figure>
                    <img
                        src={mongodb}
                        alt="Shoes" className='h-48 w-96'/>
                </figure>            
            </div>
            </div>
            <h2 className="text-3xl text-left mt-32 text-white mb-10">Tools & Version Contro</h2>
            <div className="flex justify-around gap-5">
            <div className=" w-96  image-full   transform hover:scale-105 transition-transform duration-300">
                <figure>
                    <img
                        src={git}
                        alt="Shoes" className='h-40'/>
                </figure>            
            </div>
            <div className=" w-96 image-full   transform hover:scale-105 transition-transform duration-300">
                <figure>
                    <img
                        src={github}
                        alt="Shoes" className='h-40 w-96'/>
                </figure>            
            </div>
            <div className="w-96  image-full   transform hover:scale-105 transition-transform duration-300">
                <figure>
                    <img
                        src={vscode}
                        alt="Shoes" className='h-40 w-96'/>
                </figure>            
            </div>
            <div className="w-96  image-full   transform hover:scale-105 transition-transform duration-300">
                <figure>
                    <img
                        src={figma}
                        alt="Shoes" className='h-40 w-96'/>
                </figure>            
            </div>
            </div>
            
          </div>   

       
    );
};

export default Skills;


