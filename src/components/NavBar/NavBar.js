import './NavBar.css'
import { Link } from 'react-scroll'

const getScrollPercent = () => {
    let h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

const background = () => {
    let scrollPercent = getScrollPercent()
    if (scrollPercent > 30) {
        document.getElementById('myNavbar').style.background = 'rgba(0, 0, 0, 0.5)'
        document.getElementById('myNavbar').style.borderRadius = '0 0 0 10px'
    } else {
        document.getElementById('myNavbar').style.background = 'transparent'
    }
}

window.addEventListener('scroll', () => {
    document.getElementById('myNavbar') ? background() : window.removeEventListener('scroll', () => {})
})

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