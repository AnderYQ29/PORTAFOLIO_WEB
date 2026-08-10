import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'y', ' ', 'J', 'h', 'o', 'n',' ', 'A', 'n','d', 'e', 'r','s', 'o', 'n']
    const jobArray = ['D', 'e', 's', 'a', 'r', 'o', 'l', 'l', 'a', 'd', 'o', 'r', ' ', 'W', 'e', 'b']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>o</span>
                    <span className={`${letterClass} _13`}>l</span>
                    <span className={`${letterClass} _14`}>a</span>
                    <span className={`${letterClass} _15`}>!</span>
                    <br/>
                    <span className={`${letterClass} _16`}>Y</span>
                    <span className={`${letterClass} _17`}>o</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Frontend Developer / UI/UX Designer</h2>
                <Link to="/contact" className="flat-button">Acerca de mi</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home;