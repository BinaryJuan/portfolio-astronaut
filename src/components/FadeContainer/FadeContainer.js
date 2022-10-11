import './FadeContainer.css'
import ProjectsPresentation from '../ProjectsPresentation/ProjectsPresentation'
import Contact from '../Contact/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faFire, faScrewdriverWrench, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faSquareJs, faReact, faNodeJs, faGitAlt, faBootstrap, faJava } from '@fortawesome/free-brands-svg-icons'


const FadeContainer = () => {
    return (
        <div className='fadeContainer' id='skills'>
            <h2>Skills</h2>
            <div className='fFlexContainer'>
                <div className='fFlex'>
                    <div className='fFlexElement'><FontAwesomeIcon className='fFlexIcon fa-gradient' icon={faHtml5} title='HTML5' /></div>
                    <div className='fFlexElement'><FontAwesomeIcon className='fFlexIcon' icon={faCss3Alt} title='CSS' /></div>
                    <div className='fFlexElement'><FontAwesomeIcon className='fFlexIcon' icon={faSquareJs} title='Javascript' /></div>
                    <div className='fFlexElement'><FontAwesomeIcon className='fFlexIcon' icon={faReact} title='React' /></div>
                    <div className='fFlexElement'><FontAwesomeIcon className='fFlexIcon' icon={faNodeJs} title='NodeJS' /></div>
                    <div className='fFlexElement'><FontAwesomeIcon className='fFlexIcon' icon={faGitAlt} title='Git/Github' /></div>
                    <div className='fFlexElement'><FontAwesomeIcon className='fFlexIcon' icon={faDatabase} title='MySQL' /></div>
                    <div className='fFlexElement'><FontAwesomeIcon className='fFlexIcon' icon={faFire} title='Firebase' /></div>
                    <div className='fFlexElement'><FontAwesomeIcon className='fFlexIcon' icon={faBootstrap} title='Bootstrap' /></div>
                    <div className='fFlexElement'><FontAwesomeIcon className='fFlexIcon' icon={faScrewdriverWrench} title='APIs' /></div>
                    <div className='fFlexElement'><FontAwesomeIcon className='fFlexIcon' icon={faJava} title='Java' /></div>
                    <div className='fFlexElement'><FontAwesomeIcon className='fFlexIcon' icon={faLeaf} title='MongoDB' /></div>
                </div>
                <img className='fFlexImg' src='media/ufo.png' alt='UFO' />
            </div>
            <a href='https://pdfhost.io/v/AuTOV043X_cvterranovaenglish' target='_blank' rel='noreferrer' className='fCv'>Inspect CV</a>
            <ProjectsPresentation />
            <Contact />
        </div>
    )
}

export default FadeContainer