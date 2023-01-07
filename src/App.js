// Setup
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Styles
import './index.css'
//Components
import SpaceBackground from './components/SpaceBackground/SpaceBackground'
import WebsiteContainer from './components/WebsiteContainer/WebsiteContainer'
import Projects from './components/Projects/Projects'
import Videogame from './components/Videogame/Videogame'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import NotFound from './components/NotFound/NotFound'
// Fonts - SpaceGrotesk (local)
import './fonts/space-grotesk/SpaceGrotesk-Light.ttf'
import './fonts/space-grotesk/SpaceGrotesk-Medium.ttf'
import './fonts/space-grotesk/SpaceGrotesk-Regular.ttf'
import './fonts/space-grotesk/SpaceGrotesk-Bold.ttf'

const App = () => {
  useEffect(() => {
    const stars = document.getElementsByClassName('shootingStar')
    stars[0].addEventListener('animationiteration', () => {randomizeStars(0, stars)})
    stars[1].addEventListener('animationiteration', () => {randomizeStars(1, stars)})
  }, [])

  const randomizeStars = (nStar, stars) => {
      let top = Math.floor(Math.random() * document.body.scrollHeight)
      top = `${top}px`
      stars[nStar].style.top = top
  }

  return (
    <div id='outerSpace'>
      <SpaceBackground />
      <div>
        <span className='shootingStar'>
          <span className='starTail'></span>
        </span>
        <span className='shootingStar'>
          <span className='starTail'></span>
        </span>
      </div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path='/' element={<WebsiteContainer />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/easter-egg' element={<Videogame />} />
            <Route path='*' element={<NotFound errorMessage={'Sorry, but this page does not exist'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App