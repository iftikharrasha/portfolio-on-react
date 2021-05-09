import './App.css';
import Coffee from './Components/Coffee/Coffee';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
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
         <Contact></Contact>
         <Footer></Footer>

         <a class="github" href="https://github.com/iftikharrasha" target="_blank">
            <i class="fab fa-github fa-2x"></i>
         </a>
    </div>
  );
}

export default App;
