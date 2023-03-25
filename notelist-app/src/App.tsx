import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainBlock } from './components/Main/Main';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <MainBlock />
      <Footer />
    </div>
  );
}

export default App;
