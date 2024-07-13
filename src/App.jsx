//import components
import { useContext } from "react";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
// import router
import { BrowserRouter as Router } from "react-router-dom";
// import context
import { CursorContext } from "./context/CursorContext";
// import motion
import { motion } from "framer-motion";


function App() {
  const { cursorVariants, cursorBg } = useContext(CursorContext)
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* Cursor */}

      <motion.div 
      variants={cursorVariants}
      animate={cursorBg}
      className=" rounded-full w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 ">

      </motion.div>
    </>
  );
}

export default App;
