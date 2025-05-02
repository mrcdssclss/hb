import React, { useState } from 'react'
import {HeartIcon, XIcon} from 'lucide-react'
import './css/photos.css'

const Photos = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    const photos = [
        {
            id: 1,
            url: 'https://github.com/user-attachments/assets/df7fd1ea-a38c-4d0e-b3cc-9450c3cc84b3',
            alt: 'withParents',
            caption: 'С бабой Галей и дедой Вовой, примерно 1977',
        },
        {
            id: 2,
            url: 'https://github.com/user-attachments/assets/e12a4ffd-a280-486e-a419-26024948078b',
            alt: 'withMeSmall',
            caption: 'С дочей Сашей, 2005',
        },
        {
            id: 3,
            url: 'https://github.com/user-attachments/assets/e1b12686-b60f-4223-995a-b8119565c3a1',
            alt: 'teenDad',
            caption: 'Где-то в полях, думаю около 90х',
        },
        {
            id: 4,
            url: 'https://github.com/user-attachments/assets/3a68d69d-5076-44cc-bd23-d7fe2c28a2a7',
            alt: 'baby',
            caption: 'Детство, 1980',
        },
        {
            id: 5,
            url: 'https://github.com/user-attachments/assets/dad40661-089b-454f-9fde-1cbde618e1e5',
            alt: 'school',
            caption: 'Школа',
        },
        {
            id: 6,
            url: 'https://private-user-images.githubusercontent.com/145647736/440059765-887d7a2c-8002-4d4e-8d6f-c759e7fe7d6f.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDYyMjIxNzYsIm5iZiI6MTc0NjIyMTg3NiwicGF0aCI6Ii8xNDU2NDc3MzYvNDQwMDU5NzY1LTg4N2Q3YTJjLTgwMDItNGQ0ZS04ZDZmLWM3NTllN2ZlN2Q2Zi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUwMlQyMTM3NTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZjQ1YzYyZGI1YjM3YzYyZmE5M2RkNGU4ODRhOWIyZjE4ZWQyZGI0NTYzMTA1ZTdlMDNlNDVkMGY3NjU3MDU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.e2dICpz7j9NbTWlLn47UQ7j3CW5lR8X5Q1EQqMDMzPs',
            alt: 'childhood',
            caption: 'Детство',
        },
        {
            id: 7,
            url: 'https://github.com/user-attachments/assets/887d7a2c-8002-4d4e-8d6f-c759e7fe7d6f',
            alt: 'mak',
            caption: 'Отдых!',
        },
        {
            id: 8,
            url: 'https://github.com/user-attachments/assets/6c7d8b12-4aad-4cd5-aff7-69a880213f91',
            alt: 'pes',
            caption: 'Пес!',
        },
        {
            id: 9,
            url: 'https://github.com/user-attachments/assets/2ecde5d8-0d69-41fe-ba01-2085f25bf181',
            alt: 'swimming',
            caption: 'Лето, дом',
        },
        {
            id: 10,
            url: 'https://github.com/user-attachments/assets/d8c36b0e-e429-41bd-8156-fbd551383f26',
            alt: 'home',
            caption: 'Дом, вечер',
        },
        {
            id: 11,
            url: 'https://github.com/user-attachments/assets/457a9c80-7c2b-4a71-a0df-6ffa3e13b61a',
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
