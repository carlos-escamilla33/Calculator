import React from 'react';
import ReactDOM from 'react-dom';
import Bill from "./Bill.js"

const App = () => {
  return(
    <>
      <Bill />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);