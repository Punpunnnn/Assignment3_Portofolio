import hacktiv8 from "../../assets/thumb.jpg";
import styles from "./style.module.css";
import Header from "../../components/Header";

const Home = () => {
    return (
        <div className={styles.container}>
            <Header title="Home" />
            <section className={styles.section}>
            <img src={hacktiv8} alt="Hacktiv8" className={styles.img} />
                <div className="text">
                <h2>Hey There!</h2>
                <h1>I'm Harfa Sabri</h1>
                <h3>Welcome to my Portfolio!!</h3>
                </div>
                
            </section>
        </div>
    );
}

export default Home;
