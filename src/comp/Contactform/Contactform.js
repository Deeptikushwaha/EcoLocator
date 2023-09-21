import React from 'react'
import "../Contactform/Contactform.css"
const Contactform = () => {
  return (
    <div className='contact'>
        <h2>Get in Touch</h2>
        <div>
         <div className='entry'>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' autoComplete='off'></input>
          </div>
          <div>
            <label>Email</label>
            <input type='email' name='email'></input>
          </div>
           <div className='options'>
            <div>
              <input
                type="radio"
                name="subject"
                value='work'
                id="work"
              />
              <label htmlFor="work">Work</label>
            </div>
            <div>
              <input
                type="radio"
                name="subject"
                value="collaboration"
                id="collaboration"
              />
              <label htmlFor="collaboration">Collaboration</label>
            </div>
            <div>
              <input type="text" name="subject" id='other' placeholder='Other' autoComplete='off'/>
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" cols="30" rows="10" ></textarea>
          </div>
          <p style={{ color: 'red !important', display: 'none' }} >Something is missing</p>
          <p style={{ color: 'red !important' }} ></p>
          <div className='btn'>Send Message</div>

         </div>
        </div>
        
    </div>
  )
}

export default Contactform