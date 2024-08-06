import { motion } from "framer-motion";
import "./Loading.css"

export default function CircleLoader() {
  return (
    <div className="app__loading_container">
      <motion.span
        className="app__loading_circle"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      />
    </div>
  );
}
