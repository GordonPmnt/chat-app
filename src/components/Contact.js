import React, { Component } from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = { status: this.props.status }
    }

    render() {

        const { image, name } = this.props;
        let { status } = this.state;
        const handleClick = () => this.setState({ status: !status })

        return (
            
            <div className="Contact">
                <img src={image} className="avatar" alt={name} />
                <div>
                    <h4 className="name">{name}</h4>
                    <div className="status" onClick={handleClick} >
                        <div className={status ? "status-online" : "status-offline"}/>
                        <p className="status-text" >{status ? 'online' : 'offline'}</p>
                    </div>
                </div>
            </div>
        )
    }
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  };

export default Contact;