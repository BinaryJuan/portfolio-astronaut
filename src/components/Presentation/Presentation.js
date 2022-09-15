import './Presentation.css'

const Presentation = () => {
    return (
        <div className='pContainer'>
            <div className='pFlex'>
                <div className='fElement fImg'><img className='pImage' src='media/satellite.png' alt='satellite' /></div>
                <div className='fElement'>
                    <p className='pText'>
                        My name is Dante Terranova, i am a 21 year old programmer who is passionate for the IT field,
                        more specifically in the website development area as a full-stack developer.
                        My main knowledge encompasses both Frontend and Backend, although i am an 'always learning'
                        individual. My native language is Spanish, but i have an advanced level of English which
                        makes me able to communicate efficiently 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Presentation