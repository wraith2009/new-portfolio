import { Twitter, Linkedin, Mail, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-500">Rahul Bhardwaj</h3>
            <p className="text-gray-600">
              Software Engineer & Developer passionate about building innovative
              solutions and creating impactful applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-500">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://x.com/10xRahul_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-red-500 text-gray-200 rounded-full hover:bg-red-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-red-500 text-gray-200 rounded-full hover:bg-red-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/wraith2009"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-red-500 text-gray-200 rounded-full hover:bg-red-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:rbh97995@gmail.com"
                className="p-2 bg-red-500 text-gray-200 rounded-full hover:bg-red-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} Rahul Bhardwaj. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="https://drive.google.com/file/d/1w12SMw3JBBmgFy5iv4pZ28aBFpPzE0m2/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-red-500 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
