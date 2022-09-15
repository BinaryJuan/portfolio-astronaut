// Setup

// Styles
import './index.css'
//Components
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import FadeContainer from './components/FadeContainer/FadeContainer';
// Fonts - SpaceGrotesk (local)
import './fonts/space-grotesk/SpaceGrotesk-Light.ttf'
import './fonts/space-grotesk/SpaceGrotesk-Medium.ttf'
import './fonts/space-grotesk/SpaceGrotesk-Regular.ttf'
import './fonts/space-grotesk/SpaceGrotesk-Bold.ttf'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Presentation />
      <FadeContainer />
    </div>
  );
}

export default App;