import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Bill,
  Totals
} from "./components"

const App = () => {
  const [bill, setBill] = useState("");
  const [tipTotal, setTipTotal] = useState()

  return (
    <>
      <Bill bill={bill} setBill={setBill} />
      <Totals />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);