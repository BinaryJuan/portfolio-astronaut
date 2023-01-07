import './FadeContainer.css'
import ProjectsPresentation from '../ProjectsPresentation/ProjectsPresentation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faScrewdriverWrench, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faCss3Alt, faSquareJs, faReact, faNodeJs, faGitAlt, faJava, faBootstrap } from '@fortawesome/free-brands-svg-icons'


const FadeContainer = () => {
    return (
        <div className='fadeContainer' id='skills'>
            <h2>SKILLS</h2>
            <div className='fFlexContainer'>
                <div className='skillsOrbit'>
                    <div className='circleOrbit bigCircle'>
                        <figure className='skillPlanet purplePlanet rotateSlow'>
                            <span className='planetShadow orangePlanet'></span>
                            <span className='orbitMeteors'></span>
                        </figure>
                        <figure className='skillPlanet orangePlanet'>
                            <span className='planetShadow'></span>
                        </figure>
                        <figure className='skillPlanet redPlanet'>
                            <span className='planetShadow'></span>
                        </figure>
                        <figure className='skillPlanet bluePlanet rotateSlow'>
                            <span className='planetShadow'></span>
                            <span className='orbitMeteors'></span>
                        </figure>
                    </div>
                    <div className='circleOrbit mediumCircle'>
                        <figure className='skillPlanet greenPlanet rotateSlow'>
                            <span className='planetShadow'></span>
                            <span className='orbitMeteors'></span>
                        </figure>
                        <figure className='skillPlanet purplePlanet'>
                            <span className='planetShadow'></span>
                        </figure>
                        <figure className='skillPlanet orangePlanet'>
                            <span className='planetShadow'></span>
                        </figure>
                    </div>
                    <div className='circleOrbit smallCircle'>
                        <figure className='skillPlanet bluePlanet'>
                            <span className='planetShadow'></span>
                        </figure>
                        <figure className='skillPlanet redPlanet'>
                            <span className='planetShadow'></span>
                        </figure>
                    </div>
                    <div className='sun'></div>
                </div>
                <div className='flexSkillsContainer'>
                    <div className='flexSkillsList'>
                        <h3>MAIN SKILLS</h3>
                        <div className='skill'><FontAwesomeIcon icon={faCss3Alt} title='CSS' /></div>
                        <div className='skill'><FontAwesomeIcon icon={faSquareJs} title='Javascript' /></div>
                        <div className='skill'><FontAwesomeIcon icon={faReact} title='React' /></div>
                        <div className='skill'><FontAwesomeIcon icon={faNodeJs} title='NodeJS' /></div>
                        <div className='skill'><FontAwesomeIcon icon={faGitAlt} title='Git/Github' /></div>
                        <div className='skill'><FontAwesomeIcon icon={faDatabase} title='MySQL' /></div>
                        <div className='skill'><FontAwesomeIcon icon={faBootstrap} title='Bootstrap' /></div>
                        <div className='skill'><FontAwesomeIcon icon={faScrewdriverWrench} title='APIs' /></div>
                        <div className='skill'><FontAwesomeIcon icon={faJava} title='Java' /></div>
                        <div className='skill'><FontAwesomeIcon icon={faLeaf} title='MongoDB' /></div>
                    </div>
                    <a href='media/TERRANOVA - CV.pdf' target='_blank' rel='noreferrer' className='fCv'>INSPECT CV</a>
                </div>
            </div>
            <ProjectsPresentation />
        </div>
    )
}

export default FadeContainer