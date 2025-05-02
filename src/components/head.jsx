import React from 'react'
import './css/head.css'

const head = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-title"></div>
                <nav className="nav-desktop">
                    <button onClick={() => scrollToSection('photos')} className="nav-button">Фотошки</button>
                    <button onClick={() => scrollToSection('memories')} className="nav-button">Воспоминания</button>
                    <button onClick={() => scrollToSection('facts')} className="nav-button">Фактики</button>
                    <button onClick={() => scrollToSection('videos')} className="nav-button">Видосики</button>
                </nav>
            </div>
        </header>
    )
}

export default head
