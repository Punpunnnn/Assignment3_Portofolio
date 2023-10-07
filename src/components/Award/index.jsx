import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

/** Styles */
import styles from "./style.module.css";

const Award = ({ title, detail }) => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faTrophy} color="red" size="2xl" />
            <div className={styles.detail}>
                <h3>{title}</h3>
                <small>{detail}</small>
            </div>
        </div>
    );
};

export default Award;