import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
    const form = useRef()
    const [letterClass, setLetterClass] = useState('text-animate')
    const [sendStatus, setSendStatus] = useState(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_notbivy',
            'template_onzb3el',
            form.current,
            'zlAZdvzCl4E2IIWAP'
        )
        .then(
            () => {
                setSendStatus('Message sent successfully!')
                form.current.reset()
            },
            () => {
                setSendStatus('Failed to send message. Please try again later.')
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t','','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="user_name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="user_email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                        {sendStatus && (
                            <p className={`send-status ${sendStatus.includes('Failed') ? 'error' : 'success'}`}>
                                {sendStatus}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact;