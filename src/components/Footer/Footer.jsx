import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        
        {/* Social Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold uppercase mb-4 tracking-tight">Find Me On</h1>
          <p className="mb-4">Feel free to <span className="text-[#FB2C36] font-bold">connect</span> with me</p>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a href="https://github.com/VivekJadhav2001" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-[#FB2C36]" />
            </a>
            <a href="https://x.com/vivekjadha30076" target="_blank" rel="noreferrer">
              <BsTwitterX className="hover:text-[#FB2C36]" />
            </a>
            <a href="https://www.linkedin.com/in/vivek-jadhav-2032ab262/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-[#FB2C36]" />
            </a>
            <a href="https://www.instagram.com/vivek.jadhav200127" target="_blank" rel="noreferrer">
              <GrInstagram className="hover:text-[#FB2C36]" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold uppercase mb-4 tracking-tight">Contact</h1>
          <div className="mb-4">
            <p className="uppercase text-[#FB2C36]">E-mail</p>
            <p>vivek.jadhav200127@gmail.com</p>
          </div>
          <div>
            <p className="uppercase text-[#FB2C36]">Address</p>
            <p>Hyderabad, Telangana, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
