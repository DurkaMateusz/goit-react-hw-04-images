import React, { Component } from "react";
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
    static defaultProps = {
        images: [],
        onClick: () => {},
    }

    static propTypes = {
        images: PropTypes.array.isRequired,
        onClick: PropTypes.func.isRequired,
    }

    render() {
        const { images, onClick } = this.props;
        return (
            <ul className={styles.ImageGallery}>
                {images.map((image, i) => {
                    return (
                        <ImageGalleryItem key={i+image.id} src={image.webformatURL} alt={image.tags} large={image.largeImageURL} onClick={onClick} />
                    );
                })}
            </ul>
        );
    }
}