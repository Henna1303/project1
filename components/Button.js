import styles from "./Button.module.css";
export default function Button({ text, mainClass, hoverFunction, linkURL }) {
  return (
    <a
      className={styles.fancy}
      href={linkURL}
      style={mainClass}
      onMouseEnter={hoverFunction}
      onMouseLeave={hoverFunction}
    >
      <span className={styles.top_key}></span>
      <span className={styles.text}>{text}</span>
      <span className={styles.bottom_key_1}></span>
      <span className={styles.bottom_key_2}></span>
    </a>
  );
}
