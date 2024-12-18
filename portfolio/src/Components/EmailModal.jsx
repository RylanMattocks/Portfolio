import { useState } from "react";
import emailjs from 'emailjs-com';

const EmailModal = () => {
    const [statusMessage, setStatusMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        emailjs
            .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then(
                (result) => {
                    setMessageType('success');
                    setStatusMessage('Email sent successfully!');
                },
                (error) => {
                    setMessageType('error');
                    setStatusMessage('Error sending email. Please try again.');
                }
            )
    };

    return (
        <div className="modal fade" id="emailModal" aria-labelledby="emailModalLabel" data-bs-backdrop="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="emailModalLabel">Send me an Email</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        {statusMessage && (
                            <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`}>
                                {statusMessage}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn btn-primary">Send Email</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailModal;