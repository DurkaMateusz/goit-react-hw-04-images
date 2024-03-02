import React, { Component } from "react";
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
    static defaultProps = {
        images: [],
    }

    render() {
        const { images } = this.props;
        return (
            <ul className={styles.ImageGallery}>
                {images.map((image, i) => {
                    return (
                        <ImageGalleryItem key={i+image.id} src={image.webformatURL} alt={image.tags} large={image.largeImageURL} />
                    );
                })}
            </ul>
        );
    }
}