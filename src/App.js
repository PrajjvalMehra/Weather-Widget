import logo from './logo.svg';
import './App.scss';
import "bulma/bulma.sass";

import Icon from "./Components/icon.js";
import { render } from 'react-dom';



function App() {
  return (
  <div className="App">
    <div className="box ">
      
      <div className="columns is-mobile is-small">
        <div className="column is-small is-8 is-offset-2"><Icon></Icon></div>
      </div>
    </div>      
  </div>
  );
}

export default App;
