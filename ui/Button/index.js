import React from "react";
import { motion } from "framer-motion";

export default function Button({ children, ...props }) {
  function handlePadding() {
    if (props.size === "sm") {
      return "10px 20px";
    } else if (props.size === "md") {
      return "10px 26px";
    } else if (props.size === "lg") {
      return "13px 35px";
    }
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1, backgroundColor: props.color, color: "#fff" }}
      style={{
        backgroundColor: props.variant == "outlined" ? "#fff" : props.color,
        color: props.variant == "outlined" ? "#000" : "#fff",
        border: props.variant == "outlined" ? "1px solid #F26A7E" : "none",
        borderRadius: "6px",
        padding: handlePadding(),
        fontWeight: "500",
        fontSize: "15px",
      }}
    >
      {children}
    </motion.button>
  );
}

Button.defaultProps = {
  color: "#F26A7E",
  size: "md",
  variant: "filled",
};
