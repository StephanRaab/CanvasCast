import Canvas from './components/Canvas'
import data from './assets/paintings.json'
import Painting from './types/painting.ts'

function App() { 
  const paintings : Painting[] = data;

  return (    
    <>
      {paintings.map(painting => (
        <Canvas key={painting.id} painting={painting} />
      ))}
    </>
  )
}

export default App;
