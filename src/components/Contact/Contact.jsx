

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rostl42",
        "template_4y46mnt",
        form.current,
        "0Ax2Oqyd_tC-5Z7-i"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();

          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error(error);

          toast.error("Failed to send message. Please try again ❌", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Feel free to reach out for opportunities or collaboration.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">

        {/* Contact Info */}
        <div className="bg-[#0d081f] p-8 rounded-lg border border-gray-700 space-y-6 flex-1">

          <div className="flex justify-between">
            <span className="text-white">📧 Email</span>
            <a
              href="mailto:ramakrishnak1806@gmail.com"
              className="text-purple-400"
            >
              ramakrishnak1806@gmail.com
            </a>
          </div>

          <div className="flex justify-between">
            <span className="text-white">📞 Phone</span>
            <a
              href="tel:+919989295591"
              className="text-purple-400"
            >
              +91 99892 95591
            </a>
          </div>

          <div className="flex justify-between">
            <span className="text-white">📍 Location</span>
            <span className="text-gray-400">Telangana, Hyderabad, India</span>
          </div>

          {isSent && (
            <p className="text-green-400 text-sm text-center mt-4">
              ✔ Message Sent Successfully
            </p>
          )}

        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#0d081f] p-8 rounded-lg border border-gray-700 space-y-4 flex-1"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;

