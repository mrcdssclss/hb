import React from 'react'
import { HeartIcon} from "lucide-react";
import './css/videos.css'

const Videos = () => {
    return (
        <section id="videos" className="video-section">
            <div className="videos-container qr-centered">
                <h2 className="video-heading"><HeartIcon size={20}/> Больше фото и видео <HeartIcon size={20}/></h2>
                <div className="qr-block">
                    <img
                        src="https://github.com/user-attachments/assets/11ce5d7f-716a-4c96-889d-a73604f44b06"
                        alt="QR code to video"
                        className="qr-image"
                    />
                    <p className="qr-text"> Отсканируй, чтобы посмотреть </p>
                </div>
            </div>
        </section>
    )
}

export default Videos
