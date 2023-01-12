import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadingPage from './Component/HeadingPage/HeadingPage';
import ImageFileContextProvider from './context/ImageFileContext';
import Main from './Component/Main/Main';

function App() {
  return (
    <div className="App">
   
    <ImageFileContextProvider>
      <HeadingPage/>
    </ImageFileContextProvider>
    
    
    <Main/>
    </div>
  );
}

export default App;
