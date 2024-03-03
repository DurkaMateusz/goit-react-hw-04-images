import React, { Component} from "react";
import styles from './ImageGalleryItem.module.css';
import PropTypes from "prop-types";

export class ImageGalleryItem extends Component {
    static defaultProps = {
        src: "",
        alt: "",
        large: "",
        onClick: () => {},
    }
    
    static propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        large: PropTypes.string.isRequired,
    }

    render() {
        const { src, alt, large, onClick } = this.props;
        return (
            <li className={styles.ImageGalleryItem}>
                <img src={src} alt={alt} onClick={onClick} data-large={large} />
            </li>
        )
    }
}
