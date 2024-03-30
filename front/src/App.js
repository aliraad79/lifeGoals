import './App.css';
import Flows from "./components/Flows";

function App() {
  const initialNodes = [
    {
      id: '3',
      type: 'actorNode',
      position: { x: 0, y: 30 },
    },
    {
      id: '4',
      type: 'trohpyNode',
      position: { x: 200, y: 30 },
      data: { name: 'graduation' }
    },
    {
      id: '5',
      type: 'trohpyNode',
      position: { x: 400, y: 30 },
      data: { name: 'start a job' }
    }
  ];
  const initialEdges = [{ id: '3-4', source: '3', sourceHandle: 'output', target: '4', targetHandle: 'input', label: '5 years' },
  { id: '3-4', source: '4', sourceHandle: 'output', target: '5', targetHandle: 'input', label: '5 years' }];
  return (
    <div className="App">
      <Flows initialEdges={initialEdges} initialNodes={initialNodes} />
      <Flows initialEdges={initialEdges} initialNodes={initialNodes} />
    </div>
  );
}

export default App;
