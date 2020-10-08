import React, { useState } from 'react';
import Greeting from './Greeting/index.jsx';

const App = () => {
const [name, setName] = useState([]);
return (  
<>
  <input
    onChange={({target: {value}}) => setName(value)}
    placeholder="Enter your name"
  />
  <Greeting name={name}/>
</>
);
};

export default App;