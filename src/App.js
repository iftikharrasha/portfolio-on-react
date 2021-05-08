import './App.css';
import Coffee from './Components/Coffee/Coffee';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import ProjectsSlider from './Components/ProjectsSlider/ProjectsSlider';

function App() {
  return (
    <div className="App">
         <Header></Header>
         <Hero></Hero>
         <Coffee></Coffee>
         <ProjectsSlider></ProjectsSlider>
    </div>
  );
}

export default App;
