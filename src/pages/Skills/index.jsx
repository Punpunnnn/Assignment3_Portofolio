/** Styles */
import styles from "./style.module.css";
import Header from "../../components/Header";
import Skill from "../../components/Skill";

const Skills = () => {
    return (
        <div className={styles.container}>
            <Header title="Skills" />
            <section className={styles.section}>
                <Skill title="Problem Solving" />
                <Skill title="CSS" />
                <Skill title="HTML" />
                <Skill title="C++" />
                <Skill title="JavaScript" />
                <Skill title="Figma" />
            </section>
        </div>
    );
}

export default Skills;
