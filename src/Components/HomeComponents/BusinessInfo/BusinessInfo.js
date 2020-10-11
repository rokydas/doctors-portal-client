import React from 'react';
import BusinessInfoSingle from '../BusinessInfoSingle/BusinessInfoSingle';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import './BusinessInfo.css';

const allInfo = [
    {
        id: '1',
        title: 'Opening Hours',
        description: 'We open our chamber at 8am and close at 8pm',
        icon: faClock,
        backgroundColor: '#0fcfea'
    },
    {
        id: '2',
        title: 'Visit Our Location',
        description: 'You should visit our location for testing our services',
        icon: faMapMarker,
        backgroundColor: '#3A4256'
    },
    {
        id: '3',
        title: 'Contact Us Now',
        description: 'You can contact with us by +8801523232323',
        icon: faPhone,
        backgroundColor: '#0fcfea'
    }
]

const BusinessInfo = () => {
    return (
        <div className="custom-container">
            <div className="row">
                {
                    allInfo.map(info => <BusinessInfoSingle key={info.id} info={info} />)
                }
            </div>
        </div>

    );
};

export default BusinessInfo;