
import './App.css';
import Carousel from './component/Carousel';

import Footer from './component/Footer';
import Footernavbar from './component/Footernavbar';
import Header from './component/Header';
import Navbarimage from './component/Navbarimage';
import Secondcarousel from './component/Secondcarousel';
import Section4 from './component/Section4';
import Section5 from './component/Section5';
import Section6 from './component/Section6';



function App() {
  return (
    <div className="App" >
     <Header />
     <Navbarimage />
     <Carousel />
     <Secondcarousel />
     <Section4 />
     <Section5 />
     <Section6 />
    
      <Footer /> 
     <Footernavbar />

    
    </div>
  );
}

export default App;
