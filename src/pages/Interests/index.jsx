import tokopedia from "../../assets/tokopedia.png";
import shoppe from "../../assets/shoppe.png";
import google from "../../assets/google.png";
import linkedin from "../../assets/linkedin.png";
import hacktiv8 from "../../assets/hacktiv8.png";
/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Interest from "../../components/Interest";

const Interests = () => {
    return (
        <div className={styles.container}>
            <Header title="Interests" />
            <section className={styles.section}>
                <Interest title="Google" logo={google} />
                <Interest title="Tokopedia" logo={tokopedia} />
                <Interest title="Shoppe"  logo={shoppe} />
                <Interest title="Hacktiv8 Indonesia"  logo={hacktiv8} />  
                <Interest title="Linkedin"  logo={linkedin} />
            </section>
        </div>
    );
}

export default Interests;
