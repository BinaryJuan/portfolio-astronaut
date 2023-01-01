import './Projects.css'
import Project from '../Project/Project'
import { Link } from 'react-router-dom'

const statusList =
[
    {status: 'deployed', color: '#3af073'},
    {status: 'in progress', color: '#cc8339'},
    {status: 'pending', color: '#b8362a'}
]

const Projects = () => {
    return (
        <div className='projectsBackground'>
            <div className='projectsContainer'>
                <img className='alienImage' src='media/alien.png' alt='alien'/>
                <Link className='goHome' to='/'>
                    <img className='arrowLeft' src='media/arrow-left.svg' alt='arrow-left' />
                    <p>Go <span className='spanPurple'> home</span></p>
                </Link>
                <h2>Projects</h2>
                <p className='pcDescription'>
                    This section exhibits some of my main projects, which helped me build my
                    knowledge in the web development area. To see other projects, just visit
                    my <span><a className='spanPurple' href='https://github.com/BinaryJuan' target='_blank' rel="noreferrer">Github</a></span> user!
                </p>
                <div className='projectsList'>
                    <Project pname='Quinta Silveria' pdescription='A web designed using principally HTML, CSS and Javascript made for clients in El Salvador' pid='1' ppid='p1' arrow='a1' techs={['HTML', 'CSS', 'JS', 'Bootstrap']} status={statusList[0]} img='https://i.imgur.com/vwWDJRD.jpg' link='http://quintasilveria.com/' />
                    <Project pname='Speedfire Games' pdescription='This one was developed using ReactJS, emulating a basic videogame e-commerce and using Firebase as the DB' pid='2' ppid='p2' arrow='a2' techs={['ReactJS', 'CSS', 'JS', 'Firebase']} status={statusList[0]} img='https://i.imgur.com/tMXBmzz.jpg' link='https://speedfire.vercel.app/' />
                    <Project pname='Speedfire Backend' pdescription='A remake of Speedfire Games, but emphasizing in the backend area using Express' pid='3' ppid='p3' arrow='a3' techs={['EJS', 'CSS', 'JS', 'Mongo Atlas', 'Express', 'Websocket']} status={statusList[1]} img='' link='/projects' />
                    <Project pname='to-do-list' pdescription='Application created using Java, as a way of learning OOP in University' pid='4' ppid='p4' arrow='a4' techs={['Java', 'JavaInterface']} status={statusList[1]} img='' link='/projects' />
                    <Project pname='Broken Chains' pdescription='First project ever inside the web development area (basic e-commerce)' pid='5' ppid='p5' arrow='a5' techs={['HTML', 'CSS', 'JS']} status={statusList[0]} img='https://i.imgur.com/3jazaAh.jpg' link='https://binaryjuan.github.io/Broken-Chains/' />
                    <Project pname='My first videogame' pdescription='Kind of a long-term project for University. It will be implemented in Java' pid='6' ppid='p6' arrow='a6' techs={['Java', 'JavaInterface']} status={statusList[2]} img='' link='/projects' />
                    <Project pname='Hexa Solutions' pdescription='A website designed and developed by a couple of friends and me in order to offer different programming services' pid='8' ppid='p8' arrow='a8' techs={['REACTJS', 'CSS', 'JS']} status={statusList[0]} img='https://i.imgur.com/2cHeBHz.png' link='https://solutions-hexa.com/' />
                </div>
            </div>
        </div>
    )
}

export default Projects