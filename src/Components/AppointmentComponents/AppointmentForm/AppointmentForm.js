import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointment }) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        closeModal();
    };

    return (

        <div style={{width: '500px'}}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center">{appointment.name}</h3><br />
                    <input className="form-control" type="text" name="name" placeholder="Your Name" ref={register}/><br />
                    <input className="form-control" type="text" name="phoneNumber" placeholder="Phone Number" ref={register}/><br />
                    <input className="form-control" type="email" name="email" placeholder="Email" ref={register}/><br />
                    <div className="form-group">
                        <select name="gender" className="form-control" ref={register({ required: true })}>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <input className="form-control" type="number" name="age" placeholder="Age" ref={register}/><br />
                    <input className="form-control" type="number" name="weight" placeholder="Weight" ref={register}/><br />
                    <input className="btn btn-primary form-control" type="submit" />
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;