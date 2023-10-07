import React from "react";
import { NavLink } from "react-router-dom";
import profile from "../../assets/profile.png";

/** Styles */
import styles from "./nav.module.css";

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData: [
                {
                    title: "Home",
                    path: "/",
                },
                {
                    title: "About",
                    path: "/about",
                },
                {
                    title: "Awards",
                    path: "/awards",
                },
                {
                    title: "Experience",
                    path: "/experience",
                },
                {
                    title: "Interests",
                    path: "/interests",
                },
                {
                    title: "Skills",
                    path: "/skills",
                }
            ]
        };
    }

    render() {
        return (
            <>
                <div className={styles.sidebar}>
                    <div className={styles.img}>
                        <img src={profile} alt="profile" />
                    </div>
                    {
                        this.state.menuData.map((data, dataIdx) => (
                            <NavLink
                                to={data.path}
                                className={styles.sidebar_item}
                                key={dataIdx}
                                style={({ isActive }) => {
                                    return {
                                        paddingRight: isActive ? "0.5rem" : "",
                                        color: isActive ? "#F4EEE0" : "",
                                        fontWeight: isActive ? "Bold" : "",
                                        borderRight: isActive ? " 8px solid #B5CB99" : "",
                                    };
                                }}>
                                {data.title}
                            </NavLink>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default SideBar;