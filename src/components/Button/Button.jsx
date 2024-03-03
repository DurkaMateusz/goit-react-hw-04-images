import React, { Component } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
    static defaultProps = {
        label: "",
        onClick: () => {},
    }

    static propTypes = {
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    }

    
    render() {
        const { label, onClick } = this.props;
        return (
            <button type="button" className={styles.Button} onClick={onClick}>{label}</button>
        );
    }
}