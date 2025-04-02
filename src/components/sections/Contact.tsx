
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import SpotlightButton from "../ui/SpotlightButton";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you'd handle form submission here
    console.log("Form submitted:", formState);
    
    // For demo purposes, just reset the form
    setFormState({
      name: "",
      email: "",
      message: "",
    });
  };
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Get In Touch"
            subtitle="Contact"
            className="text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-light/80 mb-6">
                Have a project in mind or just want to chat? 
                I'd love to hear from you. Fill out the form or reach out through 
                my social links.
              </p>
              
              <div className="flex gap-4 mb-8">
                <a 
                  href="#" 
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:hello@example.com" 
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h4 className="text-lg font-medium mb-3">Current Status</h4>
                <p className="text-light/80 mb-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  Available for freelance projects
                </p>
                <p className="text-light/80">
                  <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                  Limited availability for full-time positions
                </p>
              </div>
            </motion.div>
            
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50"
                />
              </div>
              
              <SpotlightButton 
                className="w-full py-3 flex items-center justify-center gap-2"
                type="submit"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </SpotlightButton>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
