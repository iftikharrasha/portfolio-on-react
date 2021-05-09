import './App.css';
import Coffee from './Components/Coffee/Coffee';
import Gigs from './Components/Gigs/Gigs';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import ProjectsSlider from './Components/ProjectsSlider/ProjectsSlider';
import ReviewsSlider from './Components/ReviewsSlider/ReviewsSlider';

function App() {
  return (
    <div className="App">
         <Header></Header>
         <Hero></Hero>
         <Coffee></Coffee>
         <ProjectsSlider></ProjectsSlider>
         <Gigs></Gigs>
         <ReviewsSlider></ReviewsSlider>
    </div>
  );
}

export default App;
