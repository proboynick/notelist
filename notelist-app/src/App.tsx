import { Header } from './components/Header/Header';
import { Note } from './components/Note/Note';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Note />
    </div>
  );
}

export default App;
