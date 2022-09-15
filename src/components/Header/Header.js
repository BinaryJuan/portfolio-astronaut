import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import './Header.css'

// element={<ItemListContainer greeting={''} />} - hacer que al tener error 404 haya una animacion de astro. desconectado del cable
// hacer el route para la pagina de projects
const Header = () => {
    return (
        <div className='hContainer' id='home'>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/projects' />
                    <Route path='*' />
                </Routes>
            </BrowserRouter>
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