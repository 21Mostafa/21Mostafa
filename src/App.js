import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main/Main';
import { Route, Router, Routes } from 'react-router';
import About from './Main/About/About';
import Services from './Main/Services/Services';
import Experience from './Main/Experience/Experience';
import Works from './Main/Works/Works';
import Contact from './Main/Contact/Contact';
import Togather from './Togather/Togather';
import Pricing_Plan from './Main/Pricing_Plan/Pricing_Plan';
import "./tailwind.css"
 
function App() {
   

  return (
    <div className="container allinOne">
         
          
         <Header />
         {/* <Main />  */}

     
   
   
    

      
      

      <BrowserRouter>
      <Routes>
      
        <Route path="/" element={ <Main />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>  
        <Route path="/Experience" element={<Experience/>}/>
        {/* <Route path="/Works" element={<Works/>}/> */}
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Pricing_Plan" element={<Pricing_Plan/>}/>
        
         
        
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
