import React from 'react';
import "./Experience.css"
import Works from './../Works/Works';

 
const Experience = () => {
     

    var today = new Date(),
    date = today.getFullYear()  ;


    

    return (
        <section className=" ">
             <div className="container      p-5">
            <h2>Experience</h2>
            
            <div className="row m-4  ">
            
                <div className="col-md-5 wait   p-3 m-3  box">
                   <ul>
                    
                    <b><li><img src="https://img.icons8.com/external-glyph-geotatah/20/000000/external-academic-knowledge-management-glyph-glyph-geotatah.png"/> Bachelor’s  Degree </li> </b> <footer>Institute: Dhaka University, Dhaka, Bangladesh  <br />(Future) 
                    </footer> 
                    <footer>
                    Passing Year: 2022 - n
                     
                    </footer><br />
                    <b><li><img src="https://img.icons8.com/external-flat-geotatah/20/000000/external-academic-knowledge-management-flat-flat-geotatah.png"/> HSC</li> </b> <footer>Institute: Daffodil International College, Chandpur <br />(OnGoing) 
                    </footer> 
                    <footer>
                    2020 - 2022
                     
                    </footer><br />
                    <b><li><img src="https://img.icons8.com/external-glyph-geotatah/20/000000/external-academic-knowledge-management-glyph-glyph-geotatah.png"/> SSC</li> </b> <footer>Institute: Hasan Ali Government High School, Chandpur <br /> (Past)
                    </footer>
                    <footer>
                    2015 - 2020
                    </footer>
                    
                    
                    </ul></div>
                    
                    <div className="col-md-1  "></div>
                <div className="col-md-5 wait p-3 m-3  box"> 
                <ul>
                    
                    <b><li><img src="https://img.icons8.com/ios/20/000000/web-shield.png"/> Web Designer  </li> </b> <footer>Web design encompasses many different skills and disciplines in the production and maintenance of websites.  
                    </footer> 
                    <footer>
                    2020 - {date}
                    </footer><br />
                    <b><li><img src="https://img.icons8.com/ios/20/000000/atom-editor.png"/> Front-End Developer</li> </b> <footer>I have been a Front-End Web Developer Since 2020.  I Usually do this with <b> Html, Css, Js, Bootstrap, Tailwind, ReactJS</b>.
                    </footer> 
                    <footer>
                    2020 - {date}
                    </footer><br />
                    <b><li><img src="https://img.icons8.com/fluency/20/000000/backend-development.png"/> Back-End Developer</li> </b> <footer>I started as a Back-End Developer in early 2021, I can do Back-End fairly but, I do not apply for it, I do it with <b>NodeJS, MongoDB, ExpressJs</b>.
                    </footer>
                    <footer>
                    2021 - {date}
                    </footer>
                    
                    
                    </ul></div>
            </div>
        </div>
        <Works></Works>
        </section>
    );
};

export default Experience;