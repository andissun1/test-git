import { createElement } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Императивный стиль
function App() {
  let appCounter = 0;

  const increaseCounter = () => {
    appCounter++;
    document.querySelector('button').innerHTML = `count is ${appCounter}`
  }

  return (
    createElement('div', null, null, // Logos
      createElement('a', {
        href: 'https://vite.dev', 
        target: '_blank',
        alt: "Vite logo"
      }, null,
        createElement('img',{
            src: viteLogo ,
            className: 'logo',
            alt: 'Vite logo',
          }, null)
        ),
      createElement('a', {
        href: 'https://react.dev',
        target: '_blank',
        alt: 'React logo',
        }, null,
          createElement('img', {
            src: reactLogo, 
            className: "logo react",
            alt: "React logo"
          }, null)
      ),
        
      createElement('h1', null, 'Vite + React'), // title 
      
      createElement('div', {className: 'card'}, null, // button
      createElement('button', {onClick: increaseCounter}, `count is ${appCounter}`), 
        createElement('p', null, 'Edit',
          createElement('code', null, 'src/App.jsx'), 'and save to test HMR'
      )),

      createElement('p', {className: "read-the-docs"}, 'Click on the Vite and React logos to learn more.'), // footer
      createElement('p', {className: "read-the-docs"}, `Текущий год: ${new Date().getFullYear()}`)
    )
  )



}

export default App;
