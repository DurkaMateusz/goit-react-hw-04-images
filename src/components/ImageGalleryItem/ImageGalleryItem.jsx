import styles from './ImageGalleryItem.module.css';
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ src, alt, onClick, large}) =>(
    <li className={styles.ImageGalleryItem}>
    <img src={src} alt={alt} onClick={onClick} data-large={large} />
    </li>
);

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    large: PropTypes.string.isRequired,
}
