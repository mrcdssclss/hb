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
                src="https://github.com/user-attachments/assets/6509402e-fc14-441b-8f7d-8947d0029b71"
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