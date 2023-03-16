import { styles } from "../utils/styles";
import { useState } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact__form w-full flex flex-col gap-6"
    >
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
        className="w-full h-32 p-4 font-poppins font-normal text-[14px] outline-none resize-none"
        required
      />
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Your Name*"
        className="w-full p-4 font-poppins font-normal text-[14px] outline-none"
        required
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Your Email*"
        className="w-full p-4 font-poppins font-normal text-[14px] outline-none"
        required
      />
      <button
        type="submit"
        className={`${styles.button} w-full hover:bg-white hover:text-primary duration-300 tracking-[.20rem]`}
      >
        submit message
      </button>
    </form>
  );
};

export default ContactForm;
