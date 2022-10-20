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
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="skills" 
                        spy={true} 
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link 
                        to="projects" 
                        spy={true} 
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link 
                        to="contact" 
                        spy={true} 
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar