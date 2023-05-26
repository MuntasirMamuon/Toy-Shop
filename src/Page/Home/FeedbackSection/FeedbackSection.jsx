import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedbackSection = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ofcvjif', 'template_v3yaldf', form.current, 'eOo1aqeBXKdgNTlnS')
          .then((result) => {
            toast("Wow send your feedback !");;
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div>
             <div className="hero text-purple-600 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h2 className='text-center font-bold text-3xl text-purple-600 mt-4'>FeedBack Please</h2>
      <form ref={form} onSubmit={sendEmail} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
          <ToastContainer />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea type="email" name='message' className="input input-bordered" />
          
        </div>
        <div className="form-control p-3 rounded-xl btn-primary mt-6">
          <button className='' type="submit" value="Send">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default FeedbackSection;