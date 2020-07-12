import React, { useContext } from 'react';

import './App.css';
import Button from './components/Button';
import ColorsLength from './components/ColorsLength';
import { ColorsContext } from './context/colors-context';

function App(props) {

  const colorsContext = useContext(ColorsContext);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-buttons">
          <Button color="red" />
          <Button color="orange" />
          <Button color="yellow" />
          <Button color="green" />
          <Button color="blue" />
          <Button color="purple" />
        </div>

        <ul>
          {colorsContext.colors.map(color => {
            return <li key={color}>{color}</li>;
          })}
        </ul>
        <ColorsLength />
      </header>
    </div>
  );
}

export default App;
