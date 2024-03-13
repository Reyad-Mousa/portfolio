"use client";
import React, { useState, useEffect } from "react";
import SectionHead from "./SectionHead";
import { FaPaperPlane } from "react-icons/fa";
import { useActiveSectionInView } from "@/lib/hooks";
import { SendEmail } from "@/action/sendEmail";

const Contact = () => {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const { ref } = useActiveSectionInView("Contact");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setPending(true);
    await SendEmail(formData);
    setPending(false);
    setDone(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (done) {
      timer = setTimeout(() => {
        setDone(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [done]);

  return (
    <section ref={ref} id="contact" className=" scroll-mt-28 my-20 mb-20">
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
        onSubmit={handleSubmit}
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
          disabled={pending}
          type="submit"
          className=" group flex items-center gap-2
           bg-gray-950 text-white/80 text-sm
            py-2 px-3 rounded-full w-fit
            hover:scale-110 hover:text-white
            transition "
        >
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </>
          )}{" "}
        </button>
        {done && <p className="bg-green-500 px-3 py-2">Is Send.</p>}
      </form>
    </section>
  );
};

export default Contact;
