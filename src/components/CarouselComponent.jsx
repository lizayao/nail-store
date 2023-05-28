import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../assets/img/carousel1.jpg"
import carousel2 from "../assets/img/carousel2.jpg"
import carousel3 from "../assets/img/carousel3.jpg"

function CarouselComponent () {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Marcas</h3>
                    <p>Trabajamos con las mejores marcas que usan las profesionales.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Esmaltes</h3>
                    <p>Ofrecemos esmaltes UV/LED de uso profesional con larga duración.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Herramientas</h3>
                    <p>Infaltable las herramientas para poder trabajar sobre las uñas de nuestras clientas.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;