import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Clock from './chapter_04/Clock';
import Library from './chapter_03/Library';
import CommentList from './chapter_05/CommentList';
// import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import NotificationList from './chapter_06/NotificationList';
import ConfirmButton from './chapter_08/ConfirmButton';
import LangdingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';
import Blocks from './chapter_15/Blocks';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Blocks/>
//   </React.StrictMode>
// );


ReactDOM.render(
  <React.StrictMode>
    <Blocks/>
  </React.StrictMode>,
  document.getElementById('root')
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       <NotificationList />
//     </React.StrictMode>
//   );
  


reportWebVitals();




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
