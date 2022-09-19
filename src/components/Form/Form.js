import './Form.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Form = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        document.getElementById('sendButton').innerHTML = 'Sending...'
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then(() => {
            e.target.reset()
            document.getElementById('sendButton').innerHTML = 'Send'
            toast.success('E-mail sent successfully!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                closeOnClick: true,
                closeButton: false,
                icon: '🚀'
            })
        })
        .catch(() => {
            toast.error('Error sending e-mail', {
                position: toast.POSITION.BOTTOM_RIGHT,
                closeOnClick: true,
                closeButton: false
            })
        })
    }

    return (
        <div className='formFlex'>
            <form className='formContainer' ref={form} onSubmit={sendEmail} >
                <input className='fContainerInput' type="text" name='user_name' placeholder='Name or alias' required />
                <input className='fContainerInput' type="email" name='user_email' placeholder='E-mail' required />
                <textarea className='fContainerInput' name='message' placeholder='Message' required></textarea>
                <button className='formButton' id='sendButton'>Send</button>
            </form>
            <img className='formImg' src='media/pizza.png' alt='pizza' />
            <ToastContainer />
        </div>
    )
}

export default Form