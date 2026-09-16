import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => (
    <div className='nav-bar'>
        <nav>
            <NavLink end className={({ isActive }) => isActive ? 'active' : ''} to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink className={({ isActive }) => `about-link${isActive ? ' active' : ''}`} to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink className={({ isActive }) => `contact-link${isActive ? ' active' : ''}`} to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/jhon-anderson-yancapallo-quilluya-216291337/'>
                    <FontAwesomeIcon icon={faLinkedin} color ="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/AnderYQ29'>
                    <FontAwesomeIcon icon={faGithub} color ="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)


export default SideBar