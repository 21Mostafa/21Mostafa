import React from 'react';
import { useForm } from "react-hook-form";
import "./Contact.css"

const Contact = () => {
  var today = new Date(),
    date = today.getFullYear()  ;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
     fetch("http://localhost:5000/Contract",{
       method: "POST",
     headers: {
      "content-type": "application/json"     
     },
     body: JSON.stringify(data)
     })
     .then(res => res.json())
     .then(result =>{
       if(result){
         alert("Your Information is secure")
       }
     })
     window.location.reload(false);

  }

  console.log(watch("example"));
    return (
        <section className=' ' >
          <h3>Get in Touch</h3>
         <div className="   ">
          
             <div className="  m-5 p-5  ">
             
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
   
   <input {...register("Name")}      type="text" class="form-control rcorners lio"placeholder="Your Name"   id="name" required/>
       
     </div></div>
      
     <div className="col-md-6">
     <div class="mb-3">
   
   <input {...register("Email")}   type="email" class="form-control rcorners lio" id="exampleInputEmail1" placeholder="Email Address" aria-describedby="emailHelp" required/>
   
 </div>
     </div>
 </div> 

   
  <div class="mb-3">
    
    <input {...register("Subject")}  type="text" class="form-control rcorners ggg" required placeholder="Subject" id="subject"/>
  </div>
  <div class="mb-3">
  
  <textarea class="form-control rcorners message " {...register("Messages")} placeholder="Messages" id="exampleFormControlTextarea1" rows="3" required></textarea>
</div>
  <button type="submit" class="btn btn-danger rcorners ">Send Messages</button>
</form>


                </div>
            </div>
        </div>
     
 <div className="App">
 <  footer className="App"> <img src="https://img.icons8.com/wired/20/000000/copyright.png"/> all rights reserved {date} </  footer>
  
 </div><br /><br /> 
         </div>
         
        </section>
);};

export default Contact;