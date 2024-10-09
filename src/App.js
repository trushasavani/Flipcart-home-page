
import {  BrowserRouter as Router, Route } from 'react-router-dom';
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
import ElectronicsPage from './Pages/ElectronicsPage';
import FashionPage from './Pages/FashionPage';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from './Pages/Homepage';









function App() {
  return (
    
      <Router>
        <Header />
        <Switch>
         <Route path='/' exact component={Homepage} /> 
          <Route path="/electronics"   component={ElectronicsPage}  />
          <Route path="/fashion" component={FashionPage} />
       
        </Switch>
        <Footer /> 
        <Footernavbar /> 
      </Router>
    
    
  );
}

export default App;
