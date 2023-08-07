import React from 'react'




const ContactPage = () => {
  return (
    <div className='page-container'>
      <h1>Contact Page</h1>
      <p>If you would like to get in touch to make an enquiry or commission a piece of work, please do so below: </p>
      <form>
        <input type='text' placeholder='Full Name' required/>
        <input type='text' placeholder='Email Address' required/>
        <input type='text' placeholder='Your Message..' required/>
        <input type='submit'/>
        
      </form>
    </div>
  );
}

export default ContactPage