import './App.css';
import { useState } from 'react';
import Postit from "./components/Postit.js"

function App() {
  const [postitsArr, setPostitsArr] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleClick = () => {
    setPostitsArr([...postitsArr, text]);
  }

  return (
    <div>
        {postitsArr.map((postit, index) => {
          return <Postit text={postit} />}
        )}
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default App;
