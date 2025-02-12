import paintingsData from './data/paintings.json';
import Canvas from './components/Canvas';

function App() {
  return <Canvas paintings={paintingsData.paintings} />;
}

export default App;
