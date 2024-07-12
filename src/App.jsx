//import components
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
// import router
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* Cursor */}
      <div className="hidden w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 "></div>
    </>
  );
}

export default App;
