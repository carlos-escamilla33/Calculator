import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  return <div className="app">
    <div className="profile">
      <h1>Testing</h1>
    </div>
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);