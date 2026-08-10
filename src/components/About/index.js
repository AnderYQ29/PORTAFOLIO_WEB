import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    
    const[letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
            const timer = setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
    
            return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 'ó', 'c', 'e', 'm', 'e', ' ', 'm', 'á', 's']}
                            idx={15}
                        />
                    </h1>
                    <p>
                    Soy un desarrollador web Frontend Junior y diseñador UX/UI enfocado en
                    construir interfaces dinámicas, funcionales y atractivas. Busco formar
                    parte de un equipo tecnológico donde pueda aportar en proyectos desafiantes
                    y seguir fortaleciendo mis habilidades con las últimas tecnologías.
                    </p>
                    <p align="LEFT">
                        Especializado en JavaScript, React, Tailwind CSS, consumo de APIs RESTful
                        y prototipado en Figma, con bases en Backend. Experiencia en control de versiones
                        con Git/GitHub, documentación técnica y metodologías ágiles "Scrum".
                    </p>
                    <p>
                        En una frase: un desarrollador curioso, orientado a detalles y enfocado en
                        resolver problemas de diseño con código limpio y eficiente.
                    </p>
                    </div>
                    <div className='stage-cube-cont'>
                        <div className='cubespinner'>
                            <div className='face1'>
                                <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                            </div>
                            <div className='face2'>
                                <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                            </div>
                            <div className='face3'>
                                <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                            </div>
                            <div className='face4'>
                                <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                            </div>
                            <div className='face5'>
                                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                            </div>
                            <div className='face6'>
                                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                            </div>
                        </div>
                    </div>

                
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About