import { Twitter, Linkedin, Mail, Github } from "lucide-react";
import Image from "next/image";
import ShimmerButton from "./magicui/shimmer-button";

const HeroSectionPageComponent = () => {
  return (
    <div className="w-full bg-white  flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
        {/* Left side - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left px-8">
          <h5 className="text-black font-medium">Hey, I&apos;m </h5>
          <h1 className="font-playfair text-4xl font-bold text-red-500 mb-2">
            Rahul Bhardwaj
          </h1>
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            Software Engineer & Developer
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Passionate about building innovative solutions and creating
            impactful applications. I specialize in full-stack development with
            a focus on modern web technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-start">
            <a
              href="https://drive.google.com/file/d/1w12SMw3JBBmgFy5iv4pZ28aBFpPzE0m2/view?usp=drive_link"
              target="_blank"
              download="Rahul_Bhardwaj_Resume.pdf"
            >
              <ShimmerButton
                background="#020617"
                className="w-48 h-12 mb-2 text-gray-200"
              >
                Resume
              </ShimmerButton>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 justify-start">
            <a
              href="https://x.com/10xRahul_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black text-gray-200 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black text-gray-200 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/wraith2009"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black text-gray-200 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:rbh97995@gmail.com"
              className="p-2 bg-black text-gray-200 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right side - Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-12 md:mt-0 pr-12">
          <Image
            src="/rahulpfp.jpg"
            alt="Rahul Bhardwaj"
            width={300}
            height={300}
            className="object-cover rounded-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionPageComponent;
