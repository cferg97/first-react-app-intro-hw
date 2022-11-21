import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <div className="Main">
      <ButtonComponent content="This is a button"/>
      <ButtonComponent content="It doesn't do anything"/>

      <ImageComponent url="http://placekitten.com/500/500" alt="This is a picture of a cat"/>
      </div>
    </div>
  );
}

export default App;
