import './ProjectsPresentation.css'
import { Link } from 'react-router-dom'
import ThreeModel from '../ThreeModel/ThreeModel'

const ProjectsPresentation = () => {
    return (
        <div className='ppContainer' id='projects'>
            <h2>PROJECTS</h2>
            <h3><Link className='pageLink' to='/projects'><span className='spanPurple'>Click</span></Link> me!</h3>
            <div className='ppFlex'>
                {/* <img className='ppFlexImgMoon' src='media/planet.png' alt='planet' /> */}
                {/* <Link to='/easter-egg'>
                    <img className='ppUFO' src='media/ufo.png' alt='UFO' />
                </Link> */}
                <ThreeModel />
            </div>
        </div>
    )
}

export default ProjectsPresentation