import styles from "./css/App.module.css";
import { useState } from "react";
import { Button } from "./js/components/Button";
import { Dialog } from "./js/components/Dialog";
import { GameBoard } from "./js/components/GameBoard";
function App() {
  const [restart, setRestart] = useState(0);
  const [showEndDialog, setShowEndDialog] = useState(false);

  return (
    <>
      <Button restart={restart} setRestart={setRestart} />
      <h1 className={styles.Title}>Match Game</h1>
      <GameBoard setShowEndDialog={setShowEndDialog} key={restart} />
      <Dialog open={showEndDialog} setShowEndDialog={setShowEndDialog} />
    </>
  );
}

export default App;
