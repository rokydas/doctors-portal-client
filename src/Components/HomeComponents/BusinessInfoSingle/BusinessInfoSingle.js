import React from 'react';
import './BusinessInfoSingle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BusinessInfoSingle = ({ info }) => {
    return (
        <div className="col-md-4 mb-3">
            <div style={{backgroundColor: info.backgroundColor}} className="single-info d-flex justify-content-around align-items-center">
                <div style={{fontSize: '30px', padding: '15px'}}>
                    <FontAwesomeIcon icon={info.icon} />   
                </div>
                <div style={{paddingRight: '15px'}}>
                    <h4>{info.title}</h4>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>

    );
};

export default BusinessInfoSingle;