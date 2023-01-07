import './ScrollTopAnimation.css'

const ScrollTopAnimation = () => {
    const startRocket = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            const flame = document.getElementById('flame')
            flame.style.visibility = 'visible'
            document.documentElement.scrollTop = 0;
            setTimeout(() => {
                flame.style.visibility = 'hidden'
            }
            , 700)
        } else {
            document.documentElement.scrollTop = 0;
        }
    }

    return (
        <div className='scrollTopButton' id='rocketUp'>
            <img src='media/rocket.png' onClick={startRocket} title='Launch!' alt='🔝' />
            <div className="containerFlame" id='flame'>
                <div className="red flame"></div>
                <div className="orange flame"></div>
                <div className="yellow flame"></div>
                <div className="white flame"></div>
            </div>
        </div>
    )
}

export default ScrollTopAnimation