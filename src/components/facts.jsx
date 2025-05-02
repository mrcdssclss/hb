import React from 'react';
import { Award, Book, Plane, Utensils, HeartIcon, Shirt } from 'lucide-react';
import './css/facts.css';

const facts = () => {
    const facts = [
        {
            id: 1,
            icon: <HeartIcon size={24} />,
            fact: 'Очень любит поесть!',
        },
        {
            id: 2,
            icon: <Shirt size={24} />,
            fact: 'Под угрозой расстрела не готов расстаться с любимыми футболками. В т.ч. заношенными и дырявыми.',
        },
        {
            id: 3,
            icon: <Book size={24} />,
            fact: 'Знает 4 языка, является кандидатом психологических наук',
        },
        {
            id: 4,
            icon: <Plane size={24} />,
            fact: 'Срок жизни очков Андрея - один год максимум. И они точно погибнут смертью храбрых в ближайшем путешествии.',
        },
        {
            id: 5,
            icon: <Utensils size={24} />,
            fact: 'Прекрасно готовит (но только не тесто)',
        },
        {
            id: 6,
            icon: <Award size={24} />,
            fact: 'Знает историю на любой случай в жизни',
        },
    ];

    return (
        <section id="facts" className="facts-section">
            <div className="facts-container">
                <h2 className="facts-title"><HeartIcon size={20}/> Факты <HeartIcon size={20}/></h2>
                <div className="facts-grid">
                    {facts.map((item) => (
                        <div key={item.id} className="facts-card">
                            <div className="facts-icon">{item.icon}</div>
                            <p className="facts-text">{item.fact}</p>
                        </div>
                    ))}
                </div>

                <div className="numbers-section">
                    <div className="numbers-grid">
                        {/* Add stats blocks here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default facts;
