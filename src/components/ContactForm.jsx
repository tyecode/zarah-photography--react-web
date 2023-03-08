import { styles } from "../utils/styles";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact__form w-full flex flex-col gap-6"
    >
      <textarea
        placeholder="Your Message"
        className="w-full h-32 p-4 font-poppins font-normal text-[14px] outline-none resize-none"
        required
      />
      <input
        type="text"
        placeholder="Your Name*"
        className="w-full p-4 font-poppins font-normal text-[14px] outline-none"
        required
      />
      <input
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
