import Header from '../Header/Header'
import Presentation from '../Presentation/Presentation'
import FadeContainer from '../FadeContainer/FadeContainer'
import ScrollTopAnimation from '../ScollTopAnimation/ScrollTopAnimation'

const WebsiteContainer = () => {
    return (
        <div className='websiteContainer'>
            <Header />
            <Presentation />
            <FadeContainer />
            <ScrollTopAnimation />
        </div>
    )
}

export default WebsiteContainer