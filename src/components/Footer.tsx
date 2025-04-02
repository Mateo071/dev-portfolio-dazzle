
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold text-gradient mb-2 inline-block">
              Mateo Flores
            </a>
            <p className="text-light/60 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-light/60 hover:text-light transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-light/60 hover:text-light transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-light/60 hover:text-light transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="text-light/60 hover:text-light transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
