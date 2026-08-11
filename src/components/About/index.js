import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    //Modal (links de cada trabajo en el que estuve)
    const [showModal, setShowModal] = useState(false)

    const projects = [
        {
            title: 'Portafolio Profesional',
            description: 'Presentacion de mis habilidades y proyectos frontend.',
            url: 'https://tu-sitio-ejemplo.com/proyecto1'
        },
        {
            title: 'E-commerce React',
            description: 'Tienda con carrito y filtros de productos.',
            url: 'https://tu-sitio-ejemplo.com/proyecto2'
        },
        {
            title: 'Landing UI/UX',
            description: 'Pantalla responsiva diseñada para conversiones.',
            url: 'https://tu-sitio-ejemplo.com/proyecto3'
        },
        {
            title: 'Dashboard Interactivo',
            description: 'Visualizacion de datos con componentes React.',
            url: 'https://tu-sitio-ejemplo.com/proyecto4'
        },
        {
            title: 'Blog con API',
            description: 'Publicaciones dinamicas consumiendo una API REST.',
            url: 'https://tu-sitio-ejemplo.com/proyecto5'
        }
    ]
//...
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
                    
                    <button className='flat-button projects-button' onClick={() => setShowModal(true)}>
                        Ver proyectos
                    </button>

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

                    {showModal && (
                        <div className='projects-modal'>
                            <div className='modal-overlay' onClick={() => setShowModal(false)} />
                            <div className='modal-container'>
                                <button className='modal-close' onClick={() => setShowModal(false)} aria-label='Cerrar modal'>
                                    ×
                                </button>
                                <div className='modal-body'>
                                    <h2>Proyectos destacados</h2>
                                    <p>Haz clic en un proyecto para verlo en su página web.</p>
                                    <div className='project-grid'>
                                    {projects.map((project, index) => (
                                        <a
                                            key={index}
                                            className='project-card'
                                            href={project.url}
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                            <span>Ver proyecto</span>
                                        </a>
                                    ))}
                                </div>
                                </div>
                            </div>
                        </div>
                    )}

                    
                </div>
            
            <Loader type="pacman" />
        </>
    )
}

export default About