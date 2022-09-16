// Setup
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
// Styles
import './index.css'
//Components
import WebsiteContainer from './components/WebsiteContainer/WebsiteContainer'
import Projects from './components/Projects/Projects'
import NotFound from './components/NotFound/NotFound'
// Fonts - SpaceGrotesk (local)
import './fonts/space-grotesk/SpaceGrotesk-Light.ttf'
import './fonts/space-grotesk/SpaceGrotesk-Medium.ttf'
import './fonts/space-grotesk/SpaceGrotesk-Regular.ttf'
import './fonts/space-grotesk/SpaceGrotesk-Bold.ttf'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<WebsiteContainer />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='*' element={<NotFound errorMessage={'Sorry, but this page does not exist'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;