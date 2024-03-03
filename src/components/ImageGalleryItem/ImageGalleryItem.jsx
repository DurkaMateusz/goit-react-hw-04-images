import React, { Component} from "react";
import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
    static defaultProps = {
        src: "",
        alt: "",
        large: "",
        onClick: () => {},
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
