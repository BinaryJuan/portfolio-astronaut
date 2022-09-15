import './Form.css'

const Form = () => {
    return (
        <div className='formFlex'>
            <form className='formContainer'>
                <input className='fContainerInput' type="text" placeholder='Name or alias' />
                <input className='fContainerInput' type="email" placeholder='E-mail' />
                <textarea className='fContainerInput' placeholder='Message'></textarea>
                <button className='formButton'>Send</button>
            </form>
            <img className='formImg' src='media/pizza.png' alt='pizza' />
        </div>
    )
}

export default Form