import './ScrollTopAnimation.css'

const ScrollTopAnimation = () => {
    return (
        <div className='scrollTopButton'>
            <a href='/#'>
                <img src='media/purple-rocket.png' alt='scroll top' />
            </a>
            <div class="containerFlame">
                <div class="red flame"></div>
                <div class="orange flame"></div>
                <div class="yellow flame"></div>
                <div class="white flame"></div>
            </div>
        </div>
    )
}

export default ScrollTopAnimation