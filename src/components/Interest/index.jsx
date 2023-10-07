/** Styles */
import styles from "./style.module.css";

const Interest = ({ title, logo }) => {
    return (
        <div className={styles.container}>
            <img src={logo} alt={title} />
            <div className={styles.detail}>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default Interest;