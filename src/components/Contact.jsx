import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionBlock from "./SectionBlock";

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_ij8xb1d",
        "template_kimkd7a",
        form.current,
        {
          publicKey: "Hw-j8wBFLckK8F3QW",
        }
      );

      setStatus("Message sent successfully 🔥");
      form.current.reset();
    } catch (error) {
      console.error("EMAIL ERROR:", error);
      setStatus("Failed to send message ❌");
    }

    setLoading(false);
  };

  const sendWhatsApp = () => {
    const name = form.current.name.value || "";
    const email = form.current.email.value || "";
    const message = form.current.message.value || "";

    const text = encodeURIComponent(
      `Hello Gaurav,\n\nMy name is ${name}\nEmail: ${email}\n\n${message}`
    );

    window.open(
      `https://wa.me/917588441106?text=${text}`,
      "_blank"
    );
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

          <div className="border border-black/10 p-5">
            <p className="text-xs font-mono uppercase text-black/40">WhatsApp</p>
            <p className="font-medium">+91 75884 41106</p>
          </div>
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

          <div className="space-y-4">

            {/* Email Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 uppercase tracking-widest font-bold hover:bg-white hover:text-black border-2 border-black transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>

            {/* WhatsApp Button */}
            <button
              type="button"
              onClick={sendWhatsApp}
              className="w-full border-2 border-black py-4 uppercase tracking-widest font-bold hover:bg-black hover:text-white transition"
            >
              Send via WhatsApp →
            </button>

          </div>

          {status && (
            <p
              className={`font-mono text-sm ${
                status.includes("success")
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