import React from 'react';
import AppointmentSingle from '../AppointmentSingle/AppointmentSingle';

const Appointment = () => {

    const appointmentData =[
        {
            id: 1,
            name: 'Teeth Orthodontics',
            time: '8.00 AM - 9.00 AM',
            availableSpace: 10
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '10.05 AM - 11.30 AM',
            availableSpace: 15
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '5.00 PM - 6.30 PM',
            availableSpace: 5
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '7.00 AM - 8.30 AM',
            availableSpace: 7
        },
        {
            id: 5,
            name: 'Teeth Orthodontics',
            time: '8.00 AM - 9.00 AM',
            availableSpace: 10
        },
        {
            id: 6,
            name: 'Teeth Orthodontics',
            time: '8.00 AM - 9.00 AM',
            availableSpace: 10
        },
    ]

    return (
        <div>
            {
                appointmentData.map(appointment => <AppointmentSingle key={appointment.id} appointment={appointment}/>)
            }
        </div>
    );
};

export default Appointment;