import { useState } from 'react';
import './App.css';
import styles from './App.module.css';

function App() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState([]);

  // Массив со всеми кнопками калькулятора
  const buttonsArray = Array(9)
    .fill(null)
    .map((button, index) => ({
      id: index,
      value: index + 1,
    }));

  buttonsArray.push(
    {
      id: 10,
      value: '+',
    },
    {
      id: 11,
      value: 0,
    },
    {
      id: 12,
      value: '-',
    },
    {
      id: 13,
      value: '=',
    },
    {
      id: 14,
      value: 'C',
    }
  );

  function handleClick(id, buttonValue) {
    let input = document.querySelector('input');

    switch (id) {
      case 14:
        setValue(0);
        input.classList.remove(`${styles.green}`);
        break;
      case 13:
        let result = eval(value);
        setValue(result);
        input.classList.add(`${styles.green}`);
        break;
      default:
        value === 0 ? setValue(buttonValue) : setValue(String(value) + buttonValue);
        input.classList.remove(`${styles.green}`);
        break;
    }
  }

  return (
    <>
      <input type="text" className={styles.results} disabled value={value} />
      <div className={styles.container}>
        {buttonsArray.map((element) => (
          <button
            key={element.id}
            onClick={() => {
              handleClick(element.id, element.value);
            }}
          >
            {element.value}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
