'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Swal from 'sweetalert2';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for your message! We will get back to you soon.',
          confirmButtonColor: '#d4af37',
          background: '#0a0a0a',
          color: '#ffffff',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: 'Error submitting form. Please try again.',
          confirmButtonColor: '#d4af37',
          background: '#0a0a0a',
          color: '#ffffff',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error('[v0] Form submission error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: '#d4af37',
        background: '#0a0a0a',
        color: '#ffffff',
        confirmButtonText: 'OK'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-2xl sm:blur-3xl -z-10"></div>

      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6">Get In Touch</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Have a question or collaboration proposal? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form - Full Width */}
        <form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border-2 border-accent/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-all duration-300 text-sm sm:text-base"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-2">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border-2 border-accent/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-all duration-300 text-sm sm:text-base"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold mb-2">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border-2 border-accent/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-all duration-300 text-sm sm:text-base"
              placeholder="Collaboration inquiry"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm font-semibold mb-2">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary border-2 border-accent/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-all duration-300 resize-none text-sm sm:text-base"
              placeholder="Tell us more about your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 sm:py-4 bg-accent text-primary-foreground rounded-lg hover:bg-accent/90 font-bold text-base sm:text-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Send size={20} />
            <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
