import './Presentation.css'

const Presentation = () => {
    return (
        <div className='pContainer'>
            <div className='pFlex'>
                <div className='fElement fImg'><img className='pImage' src='media/satellite.png' alt='satellite' /></div>
                <div className='fElement'>
                    <p className='pText'>
                        My name is Dante Terranova, I am a programmer who is passionate for the IT field,
                        more specifically into developing desktop applications, websites and databases.
                        I consider myself a skillful individual at problem solving and would be interested
                        in new challenges.
                        My native language is Spanish, although i have an advanced level of English (C1 Advanced) which
                        makes me able to communicate efficiently and adapt to different scenarios
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Presentation