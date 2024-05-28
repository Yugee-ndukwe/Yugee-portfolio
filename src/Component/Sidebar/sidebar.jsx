import './sidebar.scss';
import LOGO from '../../assets/yugee.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';

export function Sidebar() {
    return (
        <Navbar expand="lg" className="nav-container">
            <Container>
                <Navbar.Brand href="/" className='logo-container'>
                    <img className='logo' src={LOGO} alt="logo" />
                    <span className='logo-title'> ugee</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <NavLink exact="true" to="/" className="mx-5 nav-item" activeClassName="active">
                            <div className="icon-with-text">
                                <FontAwesomeIcon icon={faHome} color="#4d4d4e" className="nav-icon home-icon" />
                                <span className="icon-text">Home</span>
                            </div>
                        </NavLink>
                        <NavLink exact="true" to="/about" className="mx-5 nav-item" activeClassName="active">
                            <div className="icon-with-text">
                                <FontAwesomeIcon icon={faUser} color="#4d4d4e" className="nav-icon about-icon" />
                                <span className="icon-text">About</span>
                            </div>
                        </NavLink>
                        <NavLink exact="true" to="/contact" className="mx-5 nav-item" activeClassName="active">
                            <div className="icon-with-text">
                                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" className="nav-icon contact-icon" />
                                <span className="icon-text">Contact</span>
                            </div>
                        </NavLink>
                    </Nav>
                    <div className='ms-auto'>
                        <Nav className='mx-5'>
                            <NavLink to="/contact" className='contact-btn'>Contact Me</NavLink>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
