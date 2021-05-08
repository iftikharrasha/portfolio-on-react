import './App.css';
import Coffee from './Components/Coffee/Coffee';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div className="App">
         <Header></Header>
         <Hero></Hero>
         <Coffee></Coffee>
    </div>
  );
}

export default App;
