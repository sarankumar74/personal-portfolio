
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageCircle } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message || !formData.subject) {
      alert('Please fill in your Name, Subject, and Message.');
      return;
    }

    const subject = encodeURIComponent(`${formData.subject} (from ${formData.name})`);
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AContact: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:${PERSONAL_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  const handleSendWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please fill in at least your Name and Message.');
      return;
    }

    // Strip non-numeric characters from the owner's phone number for the API
    const ownerPhone = PERSONAL_DETAILS.phone.replace(/[^\d]/g, '');
    
    const text = `*New Portfolio Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Contact:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`;
    
    window.open(`https://wa.me/${ownerPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Let's discuss your next project</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Contact Form */}
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Contact Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder="Enter contact number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-all hover:scale-[1.02] shadow-sm"
                >
                  <Send size={20} />
                  Send via Email
                </button>
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all hover:scale-[1.02] shadow-sm"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Right: Info & Map */}
          <div className="space-y-8 flex flex-col">
            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-4">
               {/* Email Card */}
               <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-between gap-4 border border-transparent dark:border-indigo-500/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors group">
                 <div className="flex items-center gap-4 overflow-hidden">
                   <div className="p-3 bg-white dark:bg-slate-800 rounded-full text-indigo-600 dark:text-indigo-400 shadow-sm shrink-0">
                     <Mail size={24} />
                   </div>
                   <div className="overflow-hidden">
                     <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email</p>
                     <a 
                       href={`mailto:${PERSONAL_DETAILS.email}`}
                       className="text-slate-900 dark:text-white font-semibold truncate hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
                     >
                       {PERSONAL_DETAILS.email}
                     </a>
                   </div>
                 </div>
                 
                 <button 
                   onClick={handleCopyEmail}
                   className="p-2 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 bg-white dark:bg-slate-800 rounded-full shadow-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all focus:opacity-100"
                   title="Copy Email Address"
                   aria-label="Copy Email Address"
                 >
                   {emailCopied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                 </button>
               </div>
               
               <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center gap-4 border border-transparent dark:border-indigo-500/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                 <div className="p-3 bg-white dark:bg-slate-800 rounded-full text-indigo-600 dark:text-indigo-400 shadow-sm shrink-0">
                   <Phone size={24} />
                 </div>
                 <div>
                   <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Contact Number</p>
                   <p className="text-slate-900 dark:text-white font-semibold">{PERSONAL_DETAILS.phone}</p>
                 </div>
               </div>

               <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center gap-4 border border-transparent dark:border-indigo-500/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                 <div className="p-3 bg-white dark:bg-slate-800 rounded-full text-indigo-600 dark:text-indigo-400 shadow-sm shrink-0">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Location</p>
                   <p className="text-slate-900 dark:text-white font-semibold">{PERSONAL_DETAILS.location}</p>
                 </div>
               </div>
            </div>

            {/* Map */}
            <div className="flex-1 w-full min-h-[300px] bg-slate-200 dark:bg-slate-700 rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700">
              <iframe 
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15639.087384080964!2d78.64030404487231!3d11.496375819191133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baba003c1aa1855%3A0x9b5e43b660930241!2sGangavalli%2C%20Tamil%20Nadu%20636105!5e0!3m2!1sen!2sin!4v1763566121442!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                allowFullScreen={true}
                loading="lazy"
                className="w-full h-full dark:opacity-80 hover:dark:opacity-100 transition-opacity duration-300"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
