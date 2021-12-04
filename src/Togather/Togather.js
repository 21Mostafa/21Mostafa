import React from 'react';
import About from '../Main/About/About';
import Main from '../Main/Main/Main';
import Header from './../Header/Header';
import Services from './../Main/Services/Services';
import Experience from './../Main/Experience/Experience';
import Works from './../Main/Works/Works';
import Contact from './../Main/Contact/Contact';

const Togather = () => {
    return (
        <div>
           
          
          <Main /><About/><Services/><Experience/><Works/><Contact/>
         
        </div>
    );
};

export default Togather;