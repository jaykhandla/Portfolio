import React, { useState } from "react";
import Particle from "../Particle";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First name is required.";
        if (!formData.lastName) newErrors.lastName = "Last name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.message) newErrors.message = "Message is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setSubmitted(true);
        }
    };

    return (
        <div className="contact-page">
            <div className="particle-background">
                <Particle />
            </div>

            <h1 className="project-heading">
                <strong className="purple">Contact</strong> I Me
            </h1>
            {submitted ? (
                <p>Thank you for your message! I will get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="input-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>

                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default ContactPage;
