import { useEffect,  useState } from "react";
import { AnimatedLetters } from "../AnimatedLetters";
import './about.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3,  faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

export function About(){

    const [letterClass ,setLetterClass] = useState("text-animate");
    const [loading, setLoading] = useState(true); 
    useEffect(()=>{
         setTimeout(()=>{
            setLetterClass('text-animate-hover')
        } ,3000)

        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, [])

    return(
        <>

            {loading ? (
               <Loader type ='pacman'/>  
            ) :(

          
            <div className="container  about-page my-5">
                <div className="row align-items-center my-5">
                    <div className="col-9 col-lg-8 text-zone mx-2 my-5">
                        <h1 style={{color: '#EDF993'}}>
                            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A','B','O','U','T','','M','E']}
                            idx={15}/>
                        </h1>
                        <p>I'm a passionate and dedicated Frontend Web Developer with a strong affinity for creating dynamic, user-friendly web experiences.</p>
                        <p> I've honed my skills in building responsive and interactive websites that not only look great but also perform flawlessly across all devices.</p>
                        <p>I'm looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse project.</p>
                        <div> 
                            <h3 style={{color: '#EDF993'}}>
                                My Journey
                            </h3>
                            <p>My journey into web development started 11 months ago when i discovered my passion for technology. Since then, I've been on a continuous learning path, staying up-to-date with the latest industry trends and best practices. This commitment has helpe me deliver high quality project.</p>
                            <div>
                                <h3 style={{color: '#EDF993'}}>Projects and Experience</h3>
                                <p>Over time i have had the pleasure of working on diverse projects.Some of my notable projects include:</p>
                                <ul>
                                    <li><strong style={{color: '#EDF993'}}>Project A:</strong> A news and media web app that aims at delivering content, organizing contents into category for easy exploration, storing of news link for future access and creating a community where users can engage.
                                    <a href="">https://news-media-app.vercel.app/</a>
                                    </li>
                                    <li><strong style={{color: '#EDF993'}}>Project B:</strong>A movie search app that allows users access to some recent movie.
                                    <a href="">https://movie-peach-phi.vercel.app/</a>
                                    </li>
                                    <li><strong style={{color: '#EDF993'}}>Project C:</strong> A text to speech converter web app</li>
                                    <li><strong style={{color: '#EDF993'}}>Project C:</strong> A charity organization web app built with just html and css.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 ">
                   < div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="##28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faBootstrap} color="#7952B3"/>
                    </div>
                    
                </div>
               </div>
                    </div>
                </div>
            </div>
             )}
           {/* <div className="container about-page">
            <div className="text-zone">
            <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A','B','O','U','T','','M','E']}
                    idx={15}
                    />
                </h1>
                <p>i am a very ambitious and enthusiatic frontend developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse project.</p>
                <p>I am naturally confident and continously working on improving my skills</p>
                <p></p>
            </div>
                
               <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="##28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4E28"/>
                    </div>
                </div>
               </div>
                
            </div>  */}
           
       
        </>
    )
}