import { useState } from "react";
import styles from "./Keypad.module.css";
import Screen from "./Screen";

function Keypad() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [operation, setOperation] = useState("");
  const [lastNumber, setLastNumber] = useState("");
  const [result, setResult] = useState("");

  const objects = {
    numbers: [
      {
        id: 0,
        number: 1,
      },
      {
        id: 1,
        number: 2,
      },
      {
        id: 2,
        number: 3,
      },
      {
        id: 3,
        number: 4,
      },
      {
        id: 4,
        number: 5,
      },
      {
        id: 5,
        number: 6,
      },
      {
        id: 6,
        number: 7,
      },
      {
        id: 7,
        number: 8,
      },
      {
        id: 8,
        number: 9,
      },
      {
        id: 9,
        number: 0,
      },
    ],
    operators: [
      {
        id: 0,
        operator: "+",
      },
      {
        id: 1,
        operator: "-",
      },
      {
        id: 2,
        operator: "*",
      },
      {
        id: 3,
        operator: "/",
      },
    ],
  };

  const handleNumberClick = (val) => {
    setCurrentNumber(currentNumber + String(val));
  };

  const handleOperationClick = (val) => {
    setOperation(val);
    if (result != "" && result != "Cannot divide by zero") {
      setCurrentNumber("");
      setLastNumber(result);
      setResult("");
    } else {
      setLastNumber(currentNumber);
      setCurrentNumber("");
      setResult("");
    }
  };

  const handleReset = () => {
    setOperation("");
    setCurrentNumber(0);
    setLastNumber("");
    setResult("");
  };

  const handleResult = () => {
    if (lastNumber === "" || lastNumber == NaN) {
      setLastNumber(0);
    } else if (currentNumber === "" || currentNumber == NaN) {
      setCurrentNumber(lastNumber);
    }

    var num_1 = parseFloat(lastNumber);
    var num_2 = parseFloat(currentNumber);

    switch (operation) {
      case "+":
        setResult(num_1 + num_2);
        setOperation("");
        return false;
      case "-":
        setResult(num_1 - num_2);
        setOperation("");
        break;
      case "*":
        if (num_2 === 0) {
          setResult(0);
          setOperation("");
        } else {
          setResult(num_1 * num_2);
          setOperation("");
        }
        break;
      case "/":
        if (num_2 === 0) {
          setResult("Cannot divide by zero");
          setCurrentNumber("");
          setOperation("");
          setLastNumber("");
        } else {
          setResult(num_1 / num_2);
          setOperation("");
        }
        break;
    }
  };

  return (
    <>
      <div className={styles.keypad}>
        <Screen
          result={result}
          lastNumber={lastNumber}
          operation={operation}
          currentNumber={currentNumber}
        />
        <div className={styles.numbers}>
          <button className={styles.ns2} onClick={handleReset}>
            AC
          </button>
          {objects.numbers.map((num) => (
            <button
              key={num.id}
              onClick={() => {
                handleNumberClick(num.number);
              }}
            >
              {num.number}
            </button>
          ))}
        </div>
        <div className={styles.operators}>
          {objects.operators.map((opr) => (
            <button
              key={opr.id}
              onClick={() => {
                handleOperationClick(opr.operator);
              }}
            >
              {opr.operator}
            </button>
          ))}
        </div>

        <button className={styles.ns} onClick={handleResult}>
          =
        </button>
      </div>
    </>
  );
}

export default Keypad;
