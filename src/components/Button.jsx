import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Button = ({ name, icon, isActive, onClick }) => {
  return (
    <button className="btn-main" onClick={onClick}>
      <motion.div
        animate={{ y: isActive ? -35 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="icon-main"
      >
        <div className="icon">
          <motion.div
            animate={{ width: isActive ? 60 : 0, height: isActive ? 60 : 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            animate={{ width: isActive ? 40 : 0, height: isActive ? 40 : 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.div>{icon}</motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="btn-name"
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ width: "0px", height: "0px" }}
            animate={{ width: "8px", height: "8px" }}
            exit={{ width: "0px", height: "0px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="active-dot"
          ></motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default Button;
