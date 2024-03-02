import React, { Component } from "react";
import { RingLoader } from "react-spinners";
import styles from "./Loader.module.css";

export default class Loader extends Component {
    render() {
        return (
            <div className={styles.Loader}>
                <RingLoader
                    color="rgba(54, 215, 183, 1)"
                    cssOverride={null}
                    loading
                    size={100}
                />
            </div>
        );
    }
}