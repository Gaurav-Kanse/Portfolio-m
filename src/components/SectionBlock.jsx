import { useEffect, useRef, useState } from "react";

export default function SectionBlock({ id, title, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`max-w-4xl mx-auto px-6 py-16 md:py-32 transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-5xl md:text-7xl font-black mb-12">
        {title}
      </h2>

      {children}
    </section>
  );
}