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
                            strArray={['C','o','n','t','a','c','t','a','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Estoy abierto a proyectos freelance y nuevas oportunidades laborales.
                        Si tienes alguna idea en mente, una propuesta o cualquier consulta, no
                        dudes en escribirme a través del siguiente formulario.
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
                                    <input type="submit" className="flat-button" value="ENVIAR" />
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