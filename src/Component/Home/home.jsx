import { useEffect, useState } from 'react';
import './home.scss';
import { AnimatedLetters } from '../AnimatedLetters';
import {Link} from 'react-router-dom';
import IMG from '../../assets/ugee.png';
import Loader from 'react-loaders';


export function Home(){
    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = [' ','U', 'g', 'o', 'n', 'm', 'a', ' ', 'N', 'd', 'u', 'k', 'w', 'e']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    const [loading , setLoading] = useState(true)


    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)

        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, [])
    
    return(
        <>

            {loading ? (
                 <Loader type ='pacman'/>
            ) : (

          

            <div className="container-fluid home-page ">
                <div className="row  text-img-container">
                    <div className="col-10 col-lg-5 text-zone  mx-5">
                        <h1 style={{color: '#EDF993'}}>
                            <br />
                          <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                           <br />
                           <span className={`${letterClass} _13`}>I</span>
                           <span className={`${letterClass} _14`}>'m </span>

                           <span>
                           <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                           </span>
                           <br />
                           
                           <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                        </h1>
                        <h2 style={{color: '#ccc'}}>
                            Frontend developer / Javascript Expert
                        </h2>
                        <Link to='/contact' className='contact-link'>
                           <button className='link-btn'>
                           Contact me
                           </button>
                        </Link>

                    </div>
                    <div className="col-10 col-lg-6 img-container">
                        <img className='user-img' src={IMG} alt="pix" />
                    </div>
                </div>
            </div>
           
        )}
        </>
    )
}

