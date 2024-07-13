// import context
import { useContext } from "react";
// import cursor context
import { CursorContext } from "../context/CursorContext";

// import images
import image1 from "../img/portfolio/1.png";
import image2 from "../img/portfolio/2.png";
import image3 from "../img/portfolio/3.png";
import image4 from "../img/portfolio/4.png";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions.js";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex px-5  flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-30 lg:px-48 pb-8">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="max-w-2xl flex flex-col lg:items-start items-center"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-5 max-w-sm">
              Lorem ipsum <b>dolor sit</b> amet consectetur, adipisicing elit.
              Sed sit, dolore at unde nostrum non adipis Lorem ipsum dolor sit
              amet. <b>Dolor sit</b> Lorem ipsum dolor sit amet.
            </p>
            <br />
            <p className="mb-5 max-w-sm">
              Lorem ipsum <b> dolor sit amet consectetur</b> adipisicing elit.
              Assumenda, doloremque?
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </motion.div>
          {/* image grid */}
          <div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="grid grid-cols-2 lg:gap-2">
            {/* image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 "
                src={image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 "
                src={image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 "
                src={image3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 "
                src={image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
