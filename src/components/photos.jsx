import React, { useState } from 'react'
import {HeartIcon, XIcon} from 'lucide-react'
import './css/photos.css'

const Photos = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    const photos = [
        {
            id: 1,
            url: './public/photos/withParents.jpg',
            alt: 'withParents',
            caption: 'С бабой Галей и дедой Вовой, примерно 1977',
        },
        {
            id: 2,
            url: './public/photos/withMeSmall.jpg',
            alt: 'withMeSmall',
            caption: 'С дочей Сашей, 2005',
        },
        {
            id: 3,
            url: './public/photos/teenDad.jpg',
            alt: 'teenDad',
            caption: 'Где-то в полях, думаю около 90х',
        },
        {
            id: 4,
            url: './public/photos/baby.jpg',
            alt: 'baby',
            caption: 'Детство, 1980',
        },
        {
            id: 5,
            url: './public/photos/IMAGE 2025-05-02 14_47_47.jpg',
            alt: 'school',
            caption: 'Школа',
        },
        {
            id: 6,
            url: './public/photos/childhood.jpg',
            alt: 'childhood',
            caption: 'Детство',
        },
        {
            id: 7,
            url: './public/photos/mak.png',
            alt: 'mak',
            caption: 'Отдых!',
        },
        {
            id: 8,
            url: './public/photos/pes.png',
            alt: 'pes',
            caption: 'Пес!',
        },
        {
            id: 9,
            url: './public/photos/swimming.jpg',
            alt: 'swimming',
            caption: 'Лето, дом',
        },
        {
            id: 10,
            url: './public/photos/home.jpg',
            alt: 'home',
            caption: 'Дом, вечер',
        },
        {
            id: 11,
            url: './public/photos/oyster.jpg',
            alt: 'oyster',
            caption: 'Устричный бар',
        },
    ]

    const openModal = (url) => {
        setSelectedImage(url)
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    return (
        <section id="photos" className="photos-section">
            <div className="photos-container">
                <h2 className="photos-title"><HeartIcon size={20}/> Фотографии <HeartIcon size={20}/></h2>
                <div className="photos-carousel-wrapper">
                    <div className="photos-carousel">
                        {photos.map((photo) => (
                            <div
                                key={photo.id}
                                className="photo-card"
                                onClick={() => openModal(photo.url)}
                            >
                                <div className="photo-aspect">
                                    <img
                                        src={photo.url}
                                        alt={photo.alt}
                                        className="photo-img"
                                    />
                                </div>
                                <div className="photo-caption">
                                    <p>{photo.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {selectedImage && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content">
                            <button
                                className="modal-close"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    closeModal()
                                }}
                                aria-label="Close image"
                            >
                                <XIcon size={24}/>
                            </button>
                            <img
                                src={selectedImage}
                                alt="Enlarged view"
                                className="modal-image"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Photos
