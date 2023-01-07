import './NavBar.css'
import { Link } from 'react-scroll'

const NavBar = () => {
    return (
        <nav className='nContainer' id='myNavbar'>
            <ul>
                <li>
                    <Link 
                        to="home" 
                        spy={true} 
                        smooth={true}
                        offset={50}
                        duration={500}>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link 
                        to="skills" 
                        spy={true} 
                        smooth={true}
                        offset={50}
                        duration={500}>
                        SKILLS
                    </Link>
                </li>
                <li>
                    <Link 
                        to="projects" 
                        spy={true} 
                        smooth={true}
                        offset={50}
                        duration={500}>
                        PROJECTS
                    </Link>
                </li>
                <li>
                    <input type="checkbox" id="toggleLanguage" />
                    <label id='labelToggleLanguage' htmlFor="toggleLanguage">
                        <span className='spanToggleLanguage'>ES</span>
                        <span className='spanToggleLanguage'>EN</span>
                        <span className='sliderLanguage'>
                            <span className='sliderLanguageCircle'></span>
                        </span>
                    </label>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar