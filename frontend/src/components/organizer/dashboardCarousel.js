import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../assets/images/carousel1.png';
import image2 from '../../assets/images/carousel2.jpg';
import image3 from '../../assets/images/carousel3.jpg';
import image4 from '../../assets/images/carousel4.jpg';
import image5 from '../../assets/images/carousel5.jpg';

function DashboardCarousel() {
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
        <div style={{ maxWidth: '300px', margin: 'auto' }}>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                {images.map((image, i) => (
                    <Carousel.Item key={i}>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt={`Slide ${i}`}
                            style={{ height: 'auto', maxWidth: '100%' }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <Button variant="primary" onClick={() => setIndex((index + 1) % images.length)}>
                Next Image
            </Button>
        </div>
    );
}

export default DashboardCarousel