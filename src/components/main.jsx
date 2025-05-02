import React from 'react'
import "./css/main.css"
const Main = () => {
    return (
        <section className="hero-section">
            <h2 className="hero-title">С днем рождения, папа!</h2>
            <p className="hero-description">
                или история о том, как я рада, что тебя не отправили на Марс
            </p>
            <img
                src="./public/photos/dadMain.png"
                alt="Dad portrait"
                className="hero-image"
            />
            <p className="hero-quote">
                "все возможное сделай сейчас, невозможное - позже"
            </p>
        </section>
    )
}
export default Main