    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";

const About = () => {
    return (
        <div className={styles.container}>
            <Header title="About" />
            <section className={styles.section}>
                <h2>Harfa Sabri Ubaid</h2>
                <em>Informatics Student at Universitas Singaperbangsa Karawang</em>
                <h3>About Me</h3>
                <p>
                I am a student with a keen interest in Web Development, 
                particularly in the Front End aspect. I also have a basic understanding of User Interface and User Experience using Figma software.
                </p>
                <br />
                <div className={styles.icons}>
                    <a href="https://www.instagram.com/sabriharfa/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/harfa-sabri-ubaid-86b96b237/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                    </a>
                    <a href="https://github.com/Punpunnnn" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size='2xl' />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default About;
