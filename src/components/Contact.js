import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <img src="https://randomuser.me/api/portraits/women/22.jpg" className="avatar" alt="avatar" />
            <div>
                <h4 className="name">Catherine Castro</h4>
                <div className="status">
                    <div className="status-online"/>
                    <p className="status-text" >online</p>
                </div>
            </div>
        </div>
    )
};

export default Contact;