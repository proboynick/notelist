import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Main(): JSX.Element {
//   const [notes, setNotes] = useState([
//     {
//       id: '121333',
//       content: '1Lorem ipsum, dolor sit amet consectetur adipisicing #elit.',
//       date: '23-03-2023',
//     },
//     {
//       id: '121334',
//       content: '2Lorem ipsum, dolor sit amet consectetur adipisicing #elit.',
//       date: '23-03-2023',
//     },
//     {
//       id: '121335',
//       content: '3Lorem ipsum, dolor sit amet consectetur adipisicing #elit.',
//       date: '23-03-2023',
//     },
//     {
//       id: '121336',
//       content: '4Lorem ipsum, dolor sit amet consectetur adipisicing #elit.',
//       date: '23-03-2023',
//     },
//   ]);
// }

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
