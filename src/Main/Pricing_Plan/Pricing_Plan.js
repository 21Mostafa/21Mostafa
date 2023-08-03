import React from 'react';
import "./Pricing_Plan.css"
import Contact from './../Contact/Contact';
const Pricing_Plan = () => {
    return (
      <section>
        <h3>Pricing Plan</h3>
            <div className="container wait m-5 p-5">
             

            <div className="row App ">
               
                <div className="col-md-3 mk m-3 p-5">
                <img src="https://img.icons8.com/office/80/000000/light.png"/>
                    <h4>Basic</h4>
                    <small  > <span className="text-muted">A Simple Website but powerful to manage your business</span> <br /><br /> Email  support</small>
                    <br/><br />
                        <h5>   $ <b>20</b>/Hr</h5>
                        <br />
                        <button className="btn btn-danger">Get Started</button>
                </div>
               
                <div className="col-md-3 mk m-3 p-5">
                <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/80/000000/external-premium-marketing-seo-flatart-icons-solid-flatarticons.png"/>
                    <h4>Premium</h4> 
                    <small> <span  >Unlimited product including apps integrations and more features</span>

                        <br /><br /> Mon-Fri-wed support</small><br/><br />
                        <h5>   $ <b>49</b>/Hr</h5>
                        <br />
                        <button className="btn btn-danger">Get Started</button>
                </div>
               
                <div className="col-md-3 m-3 mk p-5">
                <img src="https://img.icons8.com/external-soft-fill-juicy-fish/80/000000/external-frisbee-sports-soft-fill-soft-fill-juicy-fish.png"/>
                    <h4>Ultimate</h4>
                    <small><span className="text-secondary">A wise option for large companies and individuals</span> <br /><br /><br/> 24/7 support

                    </small> <br /><br />
                    <h5> $ <b>99</b>/Hr</h5>
                    <br /> 
                    <button className="btn btn-danger">Get Started</button>
                </div>
            </div>
        </div>
        <Contact></Contact>
      </section>
    );
};

export default Pricing_Plan;