import './ProjectsPresentation.css'

const ProjectsPresentation = () => {
    return (
        <div className='ppContainer' id='projects'>
            <h2>Projects</h2>
            <h3><span className='spanPurple'>Click</span> me!</h3>
            <div className='ppFlex'>
                <img className='ppFlexImgMoon' src='media/moon.png' alt='planet' />
                <img className='ppFlexImgMeteors' src='media/meteors.png' alt='meteors' />
                <img className='ppFlexImgRocket' src='media/rocket.png' alt='rocket' />
            </div>
        </div>
    )
}

export default ProjectsPresentation