import styles from "./css/App.module.css";
import { useState } from "react";
import { Dialog } from "./js/components/Dialog";
import { GameBoard } from "./js/components/GameBoard";

function App() {
  const [showEndDialog, setShowEndDialog] = useState(false);

  return (
    <>
      <h1 className={styles.Title}>Match Game</h1>
      <GameBoard setShowEndDialog={setShowEndDialog} />
      <Dialog open={showEndDialog} setShowEndDialog={setShowEndDialog} />
    </>
  );
}

export default App;
