import React, { Component } from 'react';
import styles from './Button.module.css';

export class Button extends Component {
    static defaultProps = {
        label: "",
        onClick: () => {},
    }

    
    render() {
        const { label, onClick } = this.props;
        return (
            <button type="button" className={styles.Button} onClick={onClick}>{label}</button>
        );
    }
}