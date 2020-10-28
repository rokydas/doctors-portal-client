import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const AppointmentSingle = ({ appointment }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div style={{border: '1px solid green', borderRadius: '15px'}} className="m-5 p-5">
            <h3>{appointment.name}</h3>
            <h5>{appointment.time}</h5>
            <small>{appointment.availableSpace} spaces available</small><br/>
            <button onClick={openModal} className="btn btn-primary">Book Appointment</button>
            <AppointmentForm modalIsOpen={modalIsOpen} appointment={appointment} closeModal={closeModal}/>
        </div>
    );
};

export default AppointmentSingle;