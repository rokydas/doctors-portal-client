import React from 'react';
import chair from '../../../images/chair.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main className="d-flex align-items-center header-main">
            <div className="row">
                <div className="col-md-4 offset-1">
                    <h1>Your New Smile <br />Starts Here</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptatibus voluptates, hic voluptatem saepe nam!</p>
                    <button className="btn btn-primary">GET APPOINTMENT</button>
                </div>

                <div className="col-md-6 mt-3">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;