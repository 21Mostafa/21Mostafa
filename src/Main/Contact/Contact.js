import React from 'react';
import { useForm } from "react-hook-form";
import "./Contact.css"

const Contact = () => {
  var today = new Date(),
    date = today.getFullYear()  ;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
    return (
        <section className="wait ">
             <div className="  m-5 p-5  ">
            <h3>Get in Touch</h3>
            <div className="row m-5">
                <div className="col-md-3">
                <h4>Let's talk about everything!</h4>
                <h6>Don't like forms? Send me an email.   <a className="text-black aa" href="https://mail.google.com/mail/u/0/#inbox">iammostafa16@gmail.com</a></h6>
           
                </div>
                 <div className="col-md-1"></div>
                <div className="col-md-8">

 

<form className="rcorners1"  onSubmit={handleSubmit(onSubmit)}>
 
 <div className="row">
     <div className="col-md-6">
     <div class="mb-3">
   
   <input {...register("Name")}  type="text" class="form-control rcorners"placeholder="Your Name"   id="name"/>
       
     </div></div>
      
     <div className="col-md-6">
     <div class="mb-3">
   
   <input {...register("Email")}  type="email" class="form-control rcorners" id="exampleInputEmail1" placeholder="Email Address" aria-describedby="emailHelp"/>
   
 </div>
     </div>
 </div> 

   
  <div class="mb-3">
    
    <input {...register("Subject")}  type="text" class="form-control rcorners" placeholder="Subject" id="subject"/>
  </div>
  <div class="mb-3">
  
  <textarea class="form-control rcorners" {...register("Messages")} placeholder="Messages" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <button type="submit" class="btn btn-danger rcorners ">Send Messages</button>
</form>


                </div>
            </div>
        </div>
     
 <div className="App">
 <small className="App"> <img src="https://img.icons8.com/wired/20/000000/copyright.png"/> all rights reserved {date} </small>
  
 </div><br /><br /> 
        </section>
);};

export default Contact;