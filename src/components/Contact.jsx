import React from "react";
const Contact = () => {
    return (
 
      <div className="contacts-container" id='Contact'>
      <form  className='contact-form'>
        <h1>Contact Me</h1>
        
        <div className="form-group">
          <label >Name</label>
          <input  type="text" name="name" placeholder="Enter your name"/>

        </div>
         
        <div className="form-group">
          <label >Email</label>
          <input  type="text" name="email" placeholder="Enter your email"/>
          
        </div>
         
        <div className="form-group">
          <label >Messages</label>
          <textarea  name="message" placeholder="Enter your message"></textarea>
          
        </div>
      <div className="btn">
        <button type="submit">Send Message</button>
        </div>


      </form>
    </div>
    );
  }
  
  export default Contact;