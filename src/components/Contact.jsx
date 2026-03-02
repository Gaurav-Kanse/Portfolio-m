import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionBlock from "./SectionBlock";

const ContactSection = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_4mjvr2o",          
        "template_kimkd7a",        
        form.current,
        {
          publicKey: "Hw-j8wBFLckK8F3QW",  
        }
      );

      setStatus("Message sent successfully ");
      form.current.reset();
    } catch (error) {
      console.error("FULL EMAIL ERROR:", error);
      setStatus("Failed to send message ");
    }

    setLoading(false);
  };

  return (
    <SectionBlock id="contact" title="">
      <h2
        className="font-black leading-[0.9] mb-16"
        style={{ fontSize: "clamp(48px, 10vw, 120px)" }}
      >
        Get in touch.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-8">
          <p className="max-w-md text-black/70 leading-relaxed">
            Feel free to drop a message anytime. I’ll respond as soon as possible.
          </p>

          <div className="border border-black/10 p-5">
            <p className="text-xs font-mono uppercase text-black/40">Email</p>
            <p className="font-medium">eldenlord2527@gmail.com</p>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917588441106"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 border-2 border-black bg-white text-black uppercase tracking-widest font-bold shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white transition-all duration-300"
          >
            Message on WhatsApp →
          </a>
        </div>

        {/* RIGHT SIDE FORM */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="YOUR NAME"
            required
            className="w-full border border-black/20 px-5 py-4 uppercase text-sm tracking-wider outline-none focus:border-black"
          />

          <input
            type="email"
            name="email"
            placeholder="EMAIL ADDRESS"
            required
            className="w-full border border-black/20 px-5 py-4 uppercase text-sm tracking-wider outline-none focus:border-black"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="MESSAGE"
            required
            className="w-full border border-black/20 px-5 py-4 uppercase text-sm tracking-wider outline-none focus:border-black resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 uppercase tracking-widest font-bold hover:bg-white hover:text-black border-2 border-black transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>

          {status && (
            <p
              className={`font-mono text-sm ${
                status.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}

        </form>

      </div>
    </SectionBlock>
  );
};
export default ContactSection;