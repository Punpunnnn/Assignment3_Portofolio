import dicoding from "../../assets/dicoding.png";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import ExperienceSection from "../../components/Experience";

const Experience = () => {
    return (
        <div className={styles.container}>
            <Header title="Experience" />
            <section className={styles.section}>
                <ExperienceSection
                    title="Training Course"
                    position="Dicoding Academy"
                    date="Sep 2021 - Jan 2022"
                    logo={dicoding}
                />
            </section>
        </div>
    );
}

export default Experience;
