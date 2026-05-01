"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget;
  const data = new FormData(form);

  try {
    const res = await fetch("https://formspree.io/f/xaqagajz", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setToast("✅ Message sent successfully!");
      form.reset();
    } else {
      setToast("❌ Failed to send message.");
    }
  } catch (error) {
    setToast("❌ Something went wrong.");
  }

  setLoading(false);
  setTimeout(() => setToast(""), 3000);
};

  return (
   <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      
      {/* Toast */}
      {toast && (
        <div className="fixed top-5 right-5 bg-teal-500 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
          {toast}
        </div>
      )}

     <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 mt-20 text-white">
          Contact Me
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          If you have any questions, feel free to contact me. I’m always open to
          discussing new opportunities that align with my skills and interests.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="text-white rounded-lg border border-neutral-800 focus:ring-1 focus:ring-blue-900 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className=" text-white rounded-lg border border-neutral-800 focus:ring-1 focus:ring-blue-900 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            className="text-white rounded-lg border border-neutral-800 focus:ring-1 focus:ring-blue-900 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
    <BackgroundBeams />
  </div>

    </div>
  );
}