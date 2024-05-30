import { useEffect, useState } from "react";
import { AnimatedLetters } from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { Sidebar } from "../Sidebar/sidebar";
import Loader from "react-loaders";
import './about.scss';

export function About() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader type='pacman' />
      ) : (
        <div>
          <Sidebar />
          <div className="container-fluid about-page">
            <div className="row align-items-center">
              <div className="col-11 col-lg-7 text-zone about-text-zone">
                <h1 style={{ color: '#EDF993' }}>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'B', 'O', 'U', 'T', '', 'M', 'E']}
                    idx={15}
                  />
                </h1>
                <p>I'm a passionate and dedicated Frontend Web Developer with a strong affinity for creating dynamic, user-friendly web experiences.</p>
                <p>I've honed my skills in building responsive and interactive websites that not only look great but also perform flawlessly across all devices.</p>
                <p>I'm looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
                <div>
                  <h3 style={{ color: '#EDF993' }}>My Journey</h3>
                  <p>My journey into web development started 11 months ago when I discovered my passion for technology. Since then, I've been on a continuous learning path, staying up-to-date with the latest industry trends and best practices. This commitment has helped me deliver high-quality projects.</p>
                  <div>
                    <h3 style={{ color: '#EDF993' }}>Projects and Experience</h3>
                    <p>Over time I have had the pleasure of working on diverse projects. Some of my notable projects include:</p>
                    <ul>
                      <li><strong style={{ color: '#EDF993' }}>Project A:</strong> A news and media web app that aims at delivering content, organizing contents into categories for easy exploration, storing of news links for future access, and creating a community where users can engage.
                        <a href="https://news-media-app.vercel.app/">https://news-media-app.vercel.app/</a>
                      </li>
                      <li><strong style={{ color: '#EDF993' }}>Project B:</strong> A movie search app that allows users access to some recent movies.
                        <a href="https://movie-peach-phi.vercel.app/">https://movie-peach-phi.vercel.app/</a>
                      </li>
                      <li><strong style={{ color: '#EDF993' }}>Project C:</strong> A text to speech converter web app</li>
                      <li><strong style={{ color: '#EDF993' }}>Project D:</strong> A charity organization web app built with just HTML and CSS.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-10 col-lg-4 align-items-center">
                <div className="stage-cube-cont">
                  <div className="cubespinner">
                    <div className="face1">
                      <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face2">
                      <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                    </div>
                    <div className="face3">
                      <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                      <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face5">
                      <FontAwesomeIcon icon={faBootstrap} color="#7952B3" />
                    </div>
                    <div className="face6">
                      <FontAwesomeIcon icon={faGitAlt} color="#EC4E28" />
                    </div>
                  </div>
                </div>
                <div className="col-11 col-lg-10 skills-container mx-5">
                  <div className="skill-card-holder">
                 <div className="skill-card">
                    <FontAwesomeIcon icon={faReact} className="icon" color="#5ED4F4" />
                    <div className="skill-name">React</div>
                  </div>
                  <div className="skill-card">
                    <FontAwesomeIcon icon={faHtml5} className="icon" color="#f06529" />
                    <div className="skill-name">HTML5</div>
                  </div>
                  <div className="skill-card">
                    <FontAwesomeIcon icon={faCss3} className="icon" color="#28A4D9" />
                    <div className="skill-name">CSS3</div>
                  </div>
                  <div className="skill-card">
                    <FontAwesomeIcon icon={faJsSquare} className="icon" color="#EFD81D" />
                    <div className="skill-name">JavaScript</div>
                  </div>
                  <div className="skill-card">
                    <FontAwesomeIcon icon={faBootstrap} className="icon" color="#7952B3" />
                    <div className="skill-name">Bootstrap</div>
                  </div>
                  <div className="skill-card">
                    <FontAwesomeIcon icon={faGitAlt} className="icon" color="#EC4E28" />
                    <div className="skill-name">Git</div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

