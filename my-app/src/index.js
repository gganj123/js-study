import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';

ReactDOM.render(
  <React.StrictMode>
    <Library/>
  </React.StrictMode>,
  document.getElementById('root')

);

reportWebVitals();

// import Clock from './chapter_04/Clock';
// import CommentList from './chapter_05/CommentList';

// ReactDOM.render(
//   <React.StrictMode>
//     <CommentList/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
