import { useState } from 'react';
import './App.css';
import styles from './App.module.css';

function App() {
  const [value, setValue] = useState(0);
  const [greenStyle, setGreenStyle] = useState('');

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
    switch (id) {
      case 14:
        setValue(0);
        setGreenStyle('');
        break;
      case 13:
        let result = calculate(value);
        setValue(result);
        setGreenStyle(styles.green);
        break;
      default:
        value === 0 ? setValue(buttonValue) : setValue(String(value) + buttonValue);
        setGreenStyle('');
        break;
    }
  }

  function calculate(value) {
    // Читерский способ
    // try {
    //   return new Function('return (' + value + ')')();
    // } catch (err) {
    //   return '';
    // }

    let numbs = [];
    let result = 0;

    numbs = value.slice().split(/[+-]/);

    for (let element of value) {
      switch (element) {
        case '+':
          result = Number(numbs[0]) + Number(numbs[1]);
          numbs[1] = result;
          numbs.shift();
          break;
        case '-':
          result = Number(numbs[0]) - Number(numbs[1]);
          numbs[1] = result;
          numbs.shift();
          break;
      }
    }

    return result;
  }

  return (
    <>
      <input
        type="text"
        className={`${styles.results} ${greenStyle}`}
        disabled
        value={value}
      />
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
