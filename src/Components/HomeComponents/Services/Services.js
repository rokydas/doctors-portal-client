import React from 'react';
import ServicesInfo from '../ServicesInfo/ServicesInfo';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,
    },
    {
        name: 'Cavity Filling',
        img: cavity,
    },
    {
        name: 'Teeth Whitening',
        img: whitening,
    }
]

const Services = () => {
    return (
        <div className="text-center mt-5">
            <h5 style={{ color: '#0fcfea' }}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5 pt-5">
                    {
                        serviceData.map(service => <ServicesInfo service={service} />)
                    }
                </div>
            </div>


        </div>
    );
};

export default Services;