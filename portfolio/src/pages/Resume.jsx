import "../../src/resume.css"
import { motion, useScroll } from "framer-motion";

export default function Resume() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code>useScroll</code> demo
      </h1>
      <ResumeText />
    </>
  )
};