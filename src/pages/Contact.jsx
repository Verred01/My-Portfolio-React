import '../App.css'
import {useState} from 'react';

export default function Contact() {
// this is the contact form that will be displayed on the contact page
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
// this function will handle the submit button
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("submit button")
    setName('');
    setEmail('');
    setMessage('');
  }
// this is the form that will be displayed on the contact page
return (
  <div>
    <h1>Contact Page</h1>
    <form id="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input  
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <textarea 
          placeholder="Enter message here"
          value={message}
          rows="5"
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);
}