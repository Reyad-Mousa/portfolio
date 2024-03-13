"use client";
import React from "react";
import SectionHead from "./SectionHead";
import { FaPaperPlane } from "react-icons/fa";
import { useActiveSectionInView } from "@/lib/hooks";
import { SendEmail } from "@/action/sendEmail";

const Contact = () => {
  const { ref } = useActiveSectionInView("Contact");

  return (
    <section ref={ref} id="contact" className=" scroll-mt-20 my-20 mb-40">
      <SectionHead>Contact Me</SectionHead>
      <p className=" text-gray-800">
        Contact Me Direct :{" "}
        <a
          className="underline text-gray-700 font-mono"
          href="mailto:example@gmail.com"
        >
          example@gmail.com {"    "}
        </a>{" "}
        Our Trough This Form
      </p>

      <form
        action={async (formData) => {
          await SendEmail(formData);
        }}
        className="flex flex-col gap-4 mt-6 justify-stretch"
      >
        <input
          required
          name="senderEmail"
          placeholder="Your Email"
          type="email"
          className="border rounded-xl h-10 px-3"
          maxLength={100}
        />
        <textarea
          name="message"
          maxLength={500}
          required
          placeholder="Your Message"
          className="min-h-28 border rounded-xl px-3 py-2"
        />
        <button
          type="submit"
          className=" group flex items-center gap-2
           bg-gray-950 text-white/80 text-sm
            py-2 px-3 rounded-full w-fit
            hover:scale-110 hover:text-white
            transition "
        >
          Submit
          <FaPaperPlane
            className=" opacity-70 transition-all text-sm
          group-hover:translate-x-1
          group-hover:-translate-y-1"
          />
        </button>
      </form>
    </section>
  );
};

export default Contact;
