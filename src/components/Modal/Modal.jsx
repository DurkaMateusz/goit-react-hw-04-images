import PropTypes from "prop-types";
import styles from "./Modal.module.css";

export const Modal = ({ src, alt, onClick }) =>(
    <div className={styles.Overlay} onClick={onClick}>
                <div className={styles.Modal}>
                    <img src={src} alt={alt} />
                </div>
            </div>
);    

    Modal.propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    }
