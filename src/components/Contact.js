import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

const Contact = ({ image, name, status }) => {

    return (
        <div className="Contact">
            <img src={image} className="avatar" alt={name} />
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <div className={status ? "status-online" : "status-offline"}/>
                    <p className="status-text" >{status ? 'online' : 'offline'}</p>
                </div>
            </div>
        </div>
    )
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  };

export default Contact;