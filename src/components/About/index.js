import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
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
            title: 'Tambito / E-commerce',
            description: 'Aplicación web para clientes que permite explorar productos, agregar al carrito, realizar compras y gestionar su perfil y direcciones. Con un diseño responsivo y una experiencia enfocada en la usabilidad, esta solución combina React y Java Spring Boot para ofrecer una compra moderna y eficiente.',
            tecnologia: 'React, Java Spring Boot, API REST, MySQL, UX/UI, Responsive Design',
            url: 'https://systemstoresf.onrender.com/',
            nota: "Esperar unos 4 minutos para la carga de la base de datos en Render, ya que es un servicio gratuito y puede tardar en activarse."
        },
        {
            title: 'Tarjeta Profesional Interactiva',
            description: 'Tarjeta profesional responsiva con diseño moderno. Presenta mis habilidades en React, API RestFul, JavaScript y UI/UX, con enlaces a mis perfiles de GitHub, LinkedIn e Instagram. Incluye animaciones CSS y es totalmente adaptable a dispositivos móviles.',
            tecnologia: 'HTML5, CSS3, Diseño Responsivo, Animaciones CSS',
            url: 'https://professional-card-main.vercel.app'
        },
        {
            title: 'Happy Store / E-commerce',
            description: 'Aplicación web de comercio electrónico que permite explorar un catálogo de productos, aplicar filtros, consultar detalles, agregar artículos al carrito y completar el proceso de compra. Desarrollada con una interfaz responsiva y enfocada en ofrecer una experiencia de usuario clara y sencilla',
            tecnologia: 'React 19, Vite, React Router, Zustand, Sass, Fake Store API, Responsive Design',
            url: 'https://new-happy-store-mxnhzpzbg-anderyq29s-projects.vercel.app'
        },
        {
            title: 'Portafolio Web Personal',
            description: 'Aplicación desarrollada con React que presenta mi perfil como desarrollador Frontend Junior y diseñador UX/UI. Incluye secciones de inicio, información personal, habilidades, proyectos destacados y contacto, con navegación dinámica, animaciones y un diseño responsivo adaptado a distintos dispositivos.',
            tecnologia: 'React, JavaScript, Sass, React Router, Font Awesome, Animate.css y EmailJS.',
            url: 'https://portafolio-web-w9o3.vercel.app'
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

                    {showModal && createPortal(
                        (
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
                                            <p>Tecnologias utilizadas: {project.tecnologia}</p>
                                            {project.nota && <p><strong>Nota:</strong> {project.nota}</p>}
                                            <span>Ver proyecto</span>
                                        </a>
                                    ))}
                                </div>
                                </div>
                            </div>
                        </div>
                        ),
                        document.body
                    )}

                    
                </div>
            
            <Loader type="pacman" />
        </>
    )
}

export default About