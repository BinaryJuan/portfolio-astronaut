import './Contact.css'
import Form from '../Form/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className='cContainer' id='contact'>
            <h2>Contact</h2>
            <h3>Let's have a <span className='spanPurple'>pizza</span> together</h3>
            <Form />
            <div className='socialFlex'>
                <a className='sFlexElement' href='https://github.com/BinaryJuan' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} title='Github' />
                </a>
                <a className='sFlexElement' href='https://www.linkedin.com/in/dante-terranova-2383361a4/' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedinIn} title='LinkedIn' />
                </a>
            </div>
            <div className='groundSurface'>
                
            </div>
        </div>
    )
}

export default Contact