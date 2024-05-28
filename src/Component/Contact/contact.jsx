import { useEffect, useRef, useState } from 'react';
import './contact.scss';
import { AnimatedLetters } from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Loader from 'react-loaders';

export function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true);  // State for managing the loader visibility
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Simulate loading time
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust this duration as needed
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_qs2kxqh',  // Your EmailJS service ID
            'template_2z2dq6k', // Your EmailJS template ID
            refForm.current,    // Reference to the form element
            '0Acz17WejnlzawR41' // Your EmailJS public key
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
                <div className="container-fluid contact-page my-5">
                    <div className="row align-items-center my-5">
                        <div className="col-10 col-lg-10 text-zone mx-5 my-5">
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
                            <div className="contact-form align-items-center mx-5">
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
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
