import { useEffect, useRef, useState } from 'react';
import './contact.scss';
import { AnimatedLetters } from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Loader from 'react-loaders';
import { Sidebar } from '../Sidebar/sidebar';
import PIX from '../../assets/ug.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true);
    const refForm = useRef();
    const contactLinksRef = useRef();  // Ref for the contact links section

    useEffect(() => {
        console.log('Initial letterClass:', letterClass);
        setTimeout(() => {
            setLetterClass('text-animate-hover');
            console.log('Updated letterClass:', letterClass);
        }, 3000);

        setTimeout(() => {
            setLoading(false);
        }, 3000);

        // Scroll detection
        const handleScroll = () => {
            if (contactLinksRef.current) {
                const top = contactLinksRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top <= windowHeight) {
                    contactLinksRef.current.classList.add('visible');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_qs2kxqh',
            'template_2z2dq6k',
            refForm.current,
            '0Acz17WejnlzawR41'
        )
        .then(
            () => {
                alert('Message successfully sent!');
                window.location.reload(false);
            },
            (error) => {
                console.error('Failed to send message:', error);
                alert('Failed to send message');
            }
        );
    }

    return (
        <>
            {loading ? (
                <Loader type='pacman' />
            ) : (
                <div>
                    <Sidebar/>
                    <div className="container-fluid contact-page my-3">
                        <div className="row py-3 mx-1 contact-row">
                            <div className="col-10 col-lg-10 text-zone contact-text-zone mx-3">
                                <h1 className='my-3' style={{color: '#EDF993'}}>
                                    <AnimatedLetters 
                                        letterClass={letterClass}
                                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                                        idx={15}
                                    />
                                </h1>
                                <p>
                                    I am available for freelance work or full-time positions. If you have a project you want to get started, need help with something, or just want to connect, feel free to reach out to me.
                                </p>
                                <div className="contact-form align-items-center">
                                    <form ref={refForm} onSubmit={sendEmail}>
                                        <ul>
                                            <li className='half'>
                                                <input type="text" name='user_name' placeholder='Name' required />
                                            </li>
                                            <li className='half'>
                                                <input type="email" name='user_email' placeholder='Email' required />
                                            </li>
                                            <li>
                                                <input type="text" name='subject' placeholder='Subject' required />
                                            </li>
                                            <li>
                                                <textarea placeholder='Message' name='message' required></textarea>
                                            </li>
                                            <li>
                                                <input type="submit" value="Send" className='flat-btn'></input>
                                            </li>
                                        </ul>
                                    </form>
                                    <div className="row contact-links mt-5" ref={contactLinksRef}>
                                        <div className="col-10 col-lg-6 mt-3">
                                            <h3>Social Links</h3>
                                            <div className="social-icon my-5">
                                            <div>
                                                    <a href="https://github.com/Yugee-ndukwe" target='_blank'><FontAwesomeIcon icon={faGithub} color='fff'/></a>
                                                </div>
                                                <div>
                                                    <a href="www.linkedin.com/in/ugonma-ndukwe-03b434229" target='_blank'><FontAwesomeIcon icon={faLinkedin} color='fff'/></a>
                                                </div>
                                                <div>
                                                    <a href="https://x.com/yugee_ndukwe?t=R941NDRaNfef6C1dn7KVmg&s=08" target='_blank'><FontAwesomeIcon icon={faTwitter} color='fff'/></a>
                                                </div>
                                                
                                                <div>
                                                    <a href="https://www.instagram.com/yugeendukwe?igsh=cWxmbGhlNm9tamEw" target='_blank'><FontAwesomeIcon icon={faInstagram} color='fff'/></a>
                                                </div>
                                                {/* <div>
                                                    <a href="https://www.facebook.com/profile.php?id=100078709760295&mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} color='fff'/></a>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-10 col-lg-6 mt-3">
                                            <div className="contact-details">
                                                <h3>Contact details</h3>
                                               <div className='my-2'>
                                               <p><strong>Email:</strong> ugonmandukwe30@gmail.com</p>
                                                <p><strong>Mobile:</strong> +2347035716192</p>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='col-10 cpl-lg-5'>
                                <div className='contact-image'>
                                    <img src={PIX} alt="picture" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
