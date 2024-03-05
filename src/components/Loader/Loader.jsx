import { RingLoader } from "react-spinners";
import styles from "./Loader.module.css";

export const Loader = () => (<div className={styles.Loader}>
    <RingLoader
        color="rgba(54, 215, 183, 1)"
        cssOverride={null}
        loading
        size={100}
    />
</div>
);
    