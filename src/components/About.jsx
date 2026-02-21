import SectionBlock from "./SectionBlock.jsx";
import AnimatedAvatar from "./AnimatedAvatar.jsx";

const AboutSection = () => {
  return (
    <SectionBlock id="about" title="About me.">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* Avatar */}
        <AnimatedAvatar />

        {/* Text Content */}
        <div className="flex-1 max-w-2xl">

          <p className="font-mono text-sm md:text-base leading-relaxed text-black/80">
            I'm a passionate developer focused on building clean,
            scalable and user-centered digital experiences.
            I value minimal design, strong architecture,
            and code that speaks for itself.
          </p>

          <p className="font-mono text-sm md:text-base leading-relaxed text-black/70 mt-6">
            With experience across web, AI, and full-stack systems,
            I approach every project with calm precision —
            blending technical depth with creative clarity.
          </p>

        </div>

      </div>
    </SectionBlock>
  );
};

export default AboutSection;