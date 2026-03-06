import logo from './logo.svg';
import { personas } from './personas';
import PersonaCard from "./components/PersonaCard";
import './App.css';

function App() {
  return (
    <div>
      <h1>Personas</h1>
      {personas.map((p, i) => (
        <PersonaCard key={i} data={p} />
      ))}
    </div>

  );
}

export default App;
