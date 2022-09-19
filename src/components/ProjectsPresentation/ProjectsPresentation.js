import './ProjectsPresentation.css'
import { Link } from 'react-router-dom'

const ProjectsPresentation = () => {
    return (
        <div className='ppContainer' id='projects'>
            <h2>Projects</h2>
            <h3><Link className='pageLink' to='/projects'><span className='spanPurple'>Click</span></Link> me!</h3>
            <div className='ppFlex'>
                <img className='ppFlexImgMoon' src='media/moon.png' alt='planet' />
                <img className='ppFlexImgMeteors' src='media/meteors.png' alt='meteors' />
                <Link to='/easter-egg'>
                    <img className='ppFlexImgRocket' src='media/rocket.png' alt='rocket' />
                </Link>
            </div>
        </div>
    )
}

export default ProjectsPresentation