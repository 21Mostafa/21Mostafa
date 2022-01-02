import React from 'react';
import "./Services.css"
import Experience from './../Experience/Experience';

const Services = () => {  

    return (
        <section className="container m-4 p-5">
            <h2>Services</h2> 
           <div className="row">
               <div className="col-md-3 p-3 fifa fifa1  m-4 "><br/><br/><img class="rounded mx-auto d-block"  src="https://img.icons8.com/external-soft-fill-juicy-fish/50/000000/external-ui-computer-applications-soft-fill-soft-fill-juicy-fish.png"/><br/><h6 className="text-center text-white"><b>UI/UX design</b></h6>
               <footer className="text-center text-white">I have a rough idea about UI / UX.  I always try to stay updated on User Interface and User Experience. </footer></div>
               
               <div className="col-md-3 p-3 m-4 fifa fifa2 "> <br/> <br/><img class="rounded mx-auto d-block"  src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png"/><br/><h6 className="text-center"><b>Web Development</b></h6>
               <footer className="text-center  ">My main job is Web Development.  This is what I always do.  Although I am a Full-Stack Web Developer. </footer></div>
               
               <div className="col-md-3 p-3 fifa m-4 fifa3"><img class="rounded mx-auto d-block"  src="https://img.icons8.com/clouds/100/000000/camera.png"/><br/><h6 className="text-center text-white"><b>Photography</b></h6>
               <footer className="text-center text-white" >I don't have much Experience in Photography.  I do it while Updating my Facebook Profile Picture. </footer></div>
           </div>
          <div className="App"><br/><br/>
          <footer className="text-center">Looking for a Website? <a  className="Hello" href="/Contact">Click here</a> to contact me!</footer>
          </div>
          <Experience></Experience>
        </section>
    );
};

export default Services;