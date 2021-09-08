import React from 'react';
import ReactDOM from 'react-dom';
import {
  Bill,
  Totals
} from "./components"

const App = () => {
  return(
    <>
      <Bill />
      <Totals />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);