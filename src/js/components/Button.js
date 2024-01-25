import styles from "../../css/Button.module.css";

export const Button = ({ restart, setRestart }) => {
  const handleClick = () => setRestart(restart + 1);
  return (
    <aside>
      <button className={styles.Basic} onClick={handleClick}>
        Restart
      </button>
    </aside>
  );
};
