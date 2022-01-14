import './App.css';
import Slider from './components/slider';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';

function App() {
  return (
  <div class="container y mandatory-scroll-snapping" >
    <Slider />
    <About />
    <Skills />
    <Portfolio />
    
</div>

 
  );
}

export default App;
