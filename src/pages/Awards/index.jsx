import styles from "./style.module.css";
import Header from "../../components/Header";
import Award from "../../components/Award";

const Awards = () => {
    return (
        <div className={styles.container}>
            <Header title="Awards" />
            <section className={styles.section}>
            <h2>Every awards I achieved:</h2>
                <Award
                    title="Finalist of VR Content 2019"
                    detail="Issued by Universitas Tarumanegara · Sep 2019"
                />
            </section>
        </div>
    );
}

export default Awards;
