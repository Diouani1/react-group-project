import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Component/User/Register/Register';
import HeadingPage from './Component/HeadingPage/HeadingPage';
import ImageFileContextProvider from './context/ImageFileContext';

function App() {
  return (
    <div className="App">
    <Register/>
    <ImageFileContextProvider>
      <HeadingPage/>
    </ImageFileContextProvider>
    
    </div>
  );
}

export default App;
