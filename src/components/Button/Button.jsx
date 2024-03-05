import styles from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ label, onClick}) =>(
            <button type="button" className={styles.Button} onClick={onClick}>{label}</button>
);
  
Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}