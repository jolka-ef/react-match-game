import { GameBoard } from "./js/components/GameBoard";
import styles from "./css/App.module.css";

function App() {
  return (
    <>
      <h1 className={styles.Title}>Match Game</h1>
      <GameBoard />
    </>
  );
}

export default App;
