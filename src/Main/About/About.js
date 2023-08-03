import React from 'react';
import "./About.css"
import mypiku from './mypic.jpeg'
import Services from './../Services/Services';
import Main from './../Main/Main';
import Resume from "./Resume.pdf" 
 
const About = () => {
    const PDFfile =  "http://localhost:3000/Resume.pdf";

const downloadFileAtLink = (url) =>{
    const fileName = url.split("/").pop();
const aTag = document.createElement("a");
aTag.href=url;
aTag.setAttribute("download",fileName);
document.body.appendChild(aTag);
aTag.click();
aTag.remove();
} 

    return (
     <section>
         
            <div className="container    p-5 m-3">


<h3>About Me</h3>

<div className="row p-5">

    <div className="col-md-3 m-4">

        <img src={mypiku}  class="  " width="200px" />
    </div>

    <div className="col-md-4 m-4  ">
        <small>
            My name is <b>Mostafa Kamal Mehedi</b>.  I am a Mid level Web Developer from  <b>Chandpur, Bangladesh.</b>  I have a lot of experience Building and Customizing Websites.  I'm usually do this things with  <b>Html, Css, Reactjs, Angularjs and BackEnd</b> .
        </small> <br /> <br />
        <button  onClick={() =>{downloadFileAtLink(PDFfile)}}  class="btn btn-danger   transform hover:scale-110 motion-reduce:transform-none ...">
            Download CV
        </button>


    </div>

    <div className="col-md-3 m-4">
        <ul>
            <li>
                <h6> <b>Photography</b> <span style={{ float: "right" }}>65%</span> </h6>
                <hr className="reda "
                    style={{
                        color: "red",
                        backgroundColor: "color",
                        height: 5
                    }} width="65%"
                />
            </li>
        </ul>
        <ul>
            <li>
                <h6>  <b>Development</b>  <span style={{ float: "right" }}>95%</span> </h6>
                <hr className="reda"
                    style={{
                        color: "color",
                        backgroundColor: "color",
                        height: 5
                    }} width="95%"
                />

            </li>
        </ul>
        <ul>
            <li>
                <h6>  <b>UI/UX Design</b> <span style={{ float: "right" }}>85%</span> </h6>
                <hr className="reda aa"
                    style={{
                        color: "color",
                        backgroundColor: "color",
                        height: 5
                    }} width="85%"
                />
            </li>
        </ul>

    </div>



    <div className="row  m-4 p-5">
        <div className="col-md-1"></div>
        <div className="col-md-3"><br /><br /> <img src="https://img.icons8.com/bubbles/40/000000/fire-element.png" /> <b>12</b>
            <br /> <small>Projects completed</small>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3"><br /><br /> <img src="https://img.icons8.com/color/50/000000/satisfied.png" />
            <b> 05</b>
            <br /> <small>Satisfied clients</small>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3"><br /><br /> <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/40/000000/external-award-pets-accessories-those-icons-lineal-color-those-icons.png" />
            <b>32</b>
            <br /> <small>Nominees winner</small>
        </div>
    </div>



</div>
 
</div><Services/>
     </section>
    );
};

export default About;