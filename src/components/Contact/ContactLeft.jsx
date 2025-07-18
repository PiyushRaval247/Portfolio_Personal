import React from "react";
import contactImg from "../../assets/contact2.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className=" w-fit lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center ">
      <img
        className="w-full h-64 object-cover rounded-lg  mb-2"
        src={contactImg}
        alt=""
      />

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white ">Piyush Raval</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I have expertise in the MERN stack (MongoDB, Express, React, Node.js)
          and am well-versed in modern web development frameworks such as React,
          Tailwind CSS, and Bootstrap.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8200638429</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{""}
          <span className="text-lightText">piyushraval2474@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find Me In</h2>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/piyush-raval-939594261"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
