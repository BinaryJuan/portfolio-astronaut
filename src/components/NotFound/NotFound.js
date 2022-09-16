import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = ({ errorMessage }) => {
    return (
        <div className='notFoundContainer'>
            <div className='messageContainer'>
                <img className='notFoundImage' src='media/not-found.png' alt='not-found' />
                <h2>{errorMessage}</h2>
                <Link className='homeLink' to='/'>Go <span className='spanText'>home</span></Link>
            </div>
        </div>
    )
}

export default NotFound