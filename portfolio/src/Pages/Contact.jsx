import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
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
        e.preventDefault();
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_USER_ID
            )
            .then(
                (result) => {
                    setMessageType('success');
                    setStatusMessage('Email sent successfully!');
                },
                (error) => {
                    setMessageType('error');
                    setStatusMessage('Error sending email. Please try again or use the email provided above.');
                }
            );
    };

    return (
        <div className="container mt-5">
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me via the form below or contact me through other methods:</p>
            
            {/* Contact Information */}
            <div className="mb-4">
                <h4>Contact Information</h4>
                <p><strong>Email:</strong> rylan.mattocks@gmail.com</p>
                <p><strong>Phone:</strong> (812) 887-3484</p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rylanmattocks/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} autoComplete="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} autoComplete="off" required />
                </div>
                <button type="submit" className="btn btn-primary">Send Email</button>
            </form>
            {statusMessage && (
                <div className={`mt-3 alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`}>
                    {statusMessage}
                </div>
            )}
        </div>
    );
};

export default Contact;