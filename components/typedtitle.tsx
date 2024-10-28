import React from 'react';
import TypingEffect from 'react-typing-effect'; // Make sure the library is correctly installed and imported

const AnimatedText: React.FC = () => {
  return (
    <section className="bg-black">
      <h1 className="text-4xl font-bold text-white mt-6 mr-6">
        I&apos;m a <span className="text-orange-400">
          <TypingEffect
            text={[
              "Robotics Developer",
              "Software Developer",
              "Cybersecurity Enthusiast",
              "Machine Learning Enthusiast",
              "IoT Enthusiast",
            ]}
            speed={50}
            eraseSpeed={40}
            eraseDelay={2000}
            typingDelay={500}
            cursorRenderer={(cursor: string) => <span>{cursor}</span>}
          />
        </span>
      </h1>
    </section>
  );
};

export default AnimatedText;
