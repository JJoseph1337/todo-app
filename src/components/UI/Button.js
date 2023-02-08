import styles from "../UI/Button.module.css"

function Button(props) {
    const { disabled = false, children, title, onClick } = props;

    return <button className={styles.button}
        {...props}
    >
        {children}
    </button>
}

export default Button;