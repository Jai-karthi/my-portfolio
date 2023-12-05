'use client'
import emailjs from '@emailjs/browser'
import React, { useRef } from "react";

const ContactForm = () => {
  const reForm =  useRef<HTMLFormElement>(null)

  const sendemail = (e:any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_4yen9lj',
        'template_en9wdpt',
         // Use reForm.current instead of e.current
         reForm.current!, 
        'UlPsSG6AwE5GFtaai'
      )
      .then(
        () => {
          alert('Message sent successfully');
        
        },  
        () => {
          alert('Failed to send message. Please try again.');
        }
      );
  };
  
  return (
    <form ref={reForm} onSubmit={sendemail}>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;