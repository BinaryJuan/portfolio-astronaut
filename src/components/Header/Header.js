import './Header.css'
import NavBar from '../NavBar/NavBar'

const Header = () => {
    return (
        <div className='hContainer' id='home'>
            <NavBar />
            <div className='hGrid'>
                <div className='hImg'><img className='hGridImgMe' src='media/binaryjuan.png' alt='me' /></div>
                <div className='hGridText'>
                    <h2>I'm Dante Terranova</h2>
                    <h3>Full-stack developer</h3>
                </div>
                <div><img className='hGridImg' src='media/astro-donut.png' alt='astro-donut' /></div>
            </div>
        </div>
    )
}

export default Header