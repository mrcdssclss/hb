import React from 'react'
import { HeartIcon } from 'lucide-react'
import "./css/down.css"
const Down = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-icon-text">
                    <p>Сделано с любовью на папин юбилей <HeartIcon size={20}/></p>
                </div>
                <p className="footer-date">3 мая 2025</p>
            </div>
        </footer>
    )
}
export default Down