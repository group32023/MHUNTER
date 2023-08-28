import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/artistDashboardCarousel.css'
import image1 from '../assets/images/carousel3.png';
import image3 from '../assets/images/carousel4.png';
import image2 from '../assets/images/carousel2.jpg';
import image4 from '../assets/images/carousel5.png';
import image5 from '../assets/images/carousel6.jpg';


function ArtistDashboardCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='col-md-8' style={{ borderRadius: '10px' }}>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                {images.map((image, i) => (
                    <Carousel.Item key={i}>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt={`Slide ${i}`}
                            style={{ height: '300px', borderRadius: '10px' }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

        </div>
    );
}

export default ArtistDashboardCarousel