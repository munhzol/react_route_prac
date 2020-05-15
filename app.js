import React from 'react';
import { Router,Link } from '@reach/router';

const Home = () => {
  return (
    <div>
     Welcome
    </div>
  );
}

const First = (props) => {
  return (
    <div>
      {
        (props.value.isNan)
          ? <>{props.value}</>
          : <>{props.value}</>
      }
    </div>
  );
}

const Second = (props) => {
  return (
    <div style={{ backgroundColor: props.color1, color: props.color2 }}>
      {props.value}
    </div>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Home path="/home"/>
        <First path="/:value"/>
        <Second path="/:value/:color1/:color2"/>
      </Router>

      <ul>
        <li><Link to = "/home">Home</Link></li>
        <li><Link to = "/4">First</Link></li>
        <li><Link to = "/hello world">Second</Link></li>
        <li><Link to = "/home/red/blue">Home</Link></li>
      </ul>

    </div>
  );
}

export default App;
