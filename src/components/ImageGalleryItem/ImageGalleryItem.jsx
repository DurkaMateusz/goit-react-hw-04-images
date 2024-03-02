import React, { Component} from "react";
import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
    static defaultProps = {
        src: "",
        alt: "",
        large: "",
    }

    render() {
        const { src, alt, large } = this.props;
        return (
            <li className={styles.ImageGalleryItem}>
                <img src={src} alt={alt} data-large={large} />
            </li>
        )
    }
}
