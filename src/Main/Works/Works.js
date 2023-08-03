import React from 'react';
import Pricing_Plan from './../Pricing_Plan/Pricing_Plan';
const style={
    textDecoration:"none",
        color: "white"
}

const Works = () => {
    return (
            <section>
                  {/* <div className="container m-5 wait p-5 ">  
            <h3>My Recent Works</h3>
            
           <div className="App m-5"> 
           
           
           <img  src="https://img.icons8.com/ios/100/000000/my-computer--v2.png"/>  <h6>Hello!</h6>
            <small>  Hi, I'm a junior web developer.  <br/>I haven't done anything like that yet. <br/> But I have another portfolio website you can see that. <br/> If I create a new website then I will give its update in this penal </small><br /><br /> 
          <button class="btn btn-danger"> <a style={style} href="http://myportfoliobyown.xyz/">My Another Portfolio</a></button>
           </div>
           
        </div> */}
        <Pricing_Plan></Pricing_Plan>
            </section>
    );
};

export default Works;