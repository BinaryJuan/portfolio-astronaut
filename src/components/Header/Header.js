import './Header.css'
import NavBar from '../NavBar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <div className='hContainer' id='home'>
            <NavBar />
            <div className='hGrid'>
                <div className='hImg'></div>
                <div className='hGridText'>
                    <h2>I'm Dante Terranova</h2>
                    <h3>Full-stack developer</h3>
                    <div className='hSocials'>
                        <div className='socialButton'><FontAwesomeIcon className='fa-gradient fa-2xl' icon={faGithub} /></div>
                        <div className='socialButton'><FontAwesomeIcon className='fa-gradient fa-2xl' icon={faLinkedinIn} /></div>
                        <div className='socialButton'><FontAwesomeIcon className='fa-gradient fa-2xl' icon={faInstagram} /></div>
                    </div>
                </div>
                <div><img className='hGridImg' src='media/astro-donut.png' alt='astro-donut' /></div>
            </div>
        </div>
    )
}

export default Header