import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Main } from './pages/main';


function App() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <Canvas>
        <Suspense fallback={null}>
          <Main/>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
