import { motion } from "framer-motion";
import { styles } from "../styles";
import logo from "../assets/kumar.svg";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto">
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} ${styles.paddingY} flex flex-row items-center justify-between gap-5`}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${styles.heroHeadText}`}
        >
          Hi, I'm <span className="text-[#915EFF]">Kumar</span>
        </motion.h1>

        <motion.img
          src={logo}
          alt="Logo"
          className="hidden sm:block w-28 h-28 rounded-full object-cover border-4 border-[#915EFF] shadow-xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
        />
      </div>
    </section>
  );
};

export default Hero;
