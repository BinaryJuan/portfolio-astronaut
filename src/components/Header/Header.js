import './Header.css'
import NavBar from '../NavBar/NavBar'
import { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        const stars = document.getElementsByClassName('shootingStar')
        stars[0].addEventListener('animationiteration', () => {randomizeStars(0, stars)})
        stars[1].addEventListener('animationiteration', () => {randomizeStars(1, stars)})
    }, [])

    const randomizeStars = (nStar, stars) => {
        let top = Math.floor(Math.random() * (700 - 100 + 1) + 100)
        top = `${top}px`
        stars[nStar].style.top = top
    }

    return (
        <div className='hContainer' id='home'>
            <NavBar />
            <div>
                <span className='shootingStar'>
                    <span className='starTail'></span>
                </span>
                <span className='shootingStar'>
                    <span className='starTail'></span>
                </span>
            </div>
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