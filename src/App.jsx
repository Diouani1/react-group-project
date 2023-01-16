import './App.css';
import Education from './Component/Education/Education';
import Skills from './Component/Skills/Skills';

function App() {
  return (
    <div className="App">
    
      {/* <Routers> */}
        <Education/>
        <hr />
        <Skills/>
      {/* </Routers> */}

    </div>
  );
}

export default App;
