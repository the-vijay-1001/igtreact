import logo from './logo.svg';
import './App.css';
import Hero from './componenst/hero/Hero';
import AccordianPage from './componenst/accordian/Accordian';
import CarouselPage from './componenst/carousel/Carousel';
import TutorialCards from './componenst/second/Second';
import TutorialSlider from './componenst/third/Third';
import Jack from './componenst/jack/jack';


function App() {
  return <>
    <div className=''>
      <Hero />
      <AccordianPage />
      <TutorialCards />
      <TutorialSlider />
      <CarouselPage />
      <Jack />
    </div>
  </>
}

export default App;
