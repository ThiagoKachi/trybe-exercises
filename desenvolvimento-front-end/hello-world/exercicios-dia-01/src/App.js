import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  )
}

const tasks = ['Acordar', 'Estudar', 'Almoçar', 'Estudar mais']

function App() {
  return (
    <div className="App">
      {tasks.map((value) => task(value))}
    </div>
  );
}

export default App;
