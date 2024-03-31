import './App.css';
import { useState, useEffect } from 'react';
import GoalFlow from "./components/GoalFlow";

function App() {
  const [serverNodes, setServerNodes] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/flows')
      .then((res) => res.json())
      .then((data) => {
        setServerNodes(data.map(element =>
          <GoalFlow name={element.name} goals={element.goals} />
        ));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (serverNodes.length == 0) return <div></div>;

  return (
    <div className="App">
      {serverNodes}
    </div>
  );
}

export default App;
