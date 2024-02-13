import styles from "./Screen.module.css";

function Screen({ result, operation, currentNumber, lastNumber }) {
  return (
    <div className={styles.display}>
      {!result & (result !== 0) ? (
        <p>{`${lastNumber} ${operation} ${currentNumber}`}</p>
      ) : (
        <p>{result}</p>
      )}
    </div>
  );
}

export default Screen;
