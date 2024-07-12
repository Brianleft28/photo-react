// import img
import WomanImg from "../img/about/woman.png";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions.js";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center  text-center lg:text-left lg:pt-16">
          {/* iamge */}
          <div className="lg:relative lg:left-32 flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img
              className="lg:max-w-sm max-w-xs"
              src={WomanImg}
              alt="woman img"
            />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 px-5 pt-28 pb-14 text-center lg:text-start lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1 mb-0 lg:mb-5">About me</h1>
            <p>
              Lorem ipsum <b>dolor sit</b> amet consectetur, adipisicing elit.
              Sed sit, dolore at unde nostrum non adipis Lorem ipsum dolor sit
              amet. <b>Dolor sit</b> Lorem ipsum dolor sit amet.
            </p>
            <br />
            <p className="mb-12 max-w-sm">
              Lorem ipsum <b> dolor sit amet consectetur</b> adipisicing elit.
              Assumenda, doloremque?
            </p>
            <Link to={"/portfolio"} className="btn max-w-sm">
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
