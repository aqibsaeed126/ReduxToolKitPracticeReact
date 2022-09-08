import './App.css';
import { Icecream } from './features/icecream/icecream';
import  Cake  from './features/cake/cake';

function App() {
  return (
    <div className="App">
      <Cake />
      <Icecream />
    </div>
  );
}

export default App;
