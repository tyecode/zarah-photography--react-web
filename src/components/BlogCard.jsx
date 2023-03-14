import { useState } from "react";

import { styles } from "../utils/styles";
import { motion } from "framer-motion";

const blogMotion = {
  hover: {
    height: 210,
    transition: {
      duration: 0.5,
    },
  },
};

const BlogCard = ({ id, src, article, category, content }) => {
  const [hidden, setHidden] = useState("none");

  return (
    <motion.div
      whileHover="hover"
      onHoverStart={() => setHidden("block")}
      onHoverEnd={() => setHidden("none")}
      className="w-full h-auto aspect-square overflow-hidden cursor-pointer relative group"
    >
      <img
        src={src}
        alt={id}
        draggable="false"
        className="w-full h-full object-cover group-hover:scale-[1.1] duration-500"
      />
      <div className="w-full h-1/2 bg-gradient-to-t from-black absolute bottom-0 group-hover:opacity-0 opacity-80 duration-500"></div>
      <motion.div
        variants={blogMotion}
        className="w-full absolute bottom-0 px-8 py-6 group-hover:bg-white"
      >
        <span className={`${styles.categoryTag}`}>{category}</span>
        <h3
          className={`text-white ${styles.heading3} w-full h-[4rem] line-clamp-2 group-hover:text-primary`}
        >
          {article}
        </h3>
        <div style={{ display: hidden }}>
          <p className="text-primary w-full line-clamp-2 text-[14px] font-normal opacity-80">
            {content}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogCard;
