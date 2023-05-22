import { styles } from "../utils/styles";
import { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { riseUpFadeIn } from "../utils/animation";

const ContactForm = () => {
  const [message, setMessage] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <form
      onSubmit={handleSubmit}
      className="contact__form w-full flex flex-col gap-6"
    >
      <motion.textarea
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={riseUpFadeIn}
        transition={{ type: 'spring', damping: 10, duration: .5, delay: .5 }}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
        className="w-full h-32 p-4 font-poppins font-normal text-[14px] outline-none resize-none"
        required
      />
      <motion.input
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={riseUpFadeIn}
        transition={{ type: 'spring', damping: 10, duration: .5, delay: .8 }}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Your Name*"
        className="w-full p-4 font-poppins font-normal text-[14px] outline-none"
        required
      />
      <motion.input
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={riseUpFadeIn}
        transition={{ type: 'spring', damping: 10, duration: .5, delay: 1.1 }}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Your Email*"
        className="w-full p-4 font-poppins font-normal text-[14px] outline-none"
        required
      />
      <motion.span
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={riseUpFadeIn}
        transition={{ type: 'spring', damping: 10, duration: 1, delay: 1.5 }}
      >
        <button
          type="submit"
          className={`${styles.button} w-full hover:bg-white hover:text-primary duration-300 tracking-[.20rem]`}
        >
          submit message
        </button>
      </motion.span>
    </form>
  );
};

export default ContactForm;
