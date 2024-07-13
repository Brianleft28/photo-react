import { createContext, useEffect, useState } from "react";

// create context
export const CursorContext = createContext();


const CursorProvider = ({ children }) => {

  // cursor state
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  // cursor bg state
  const [cursorBg, setCursorBg] = useState("default");

  useEffect(()=> {
    const move = (e)  => {
      setCursor({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", move)
    // remove event
    return () => window.removeEventListener("mousemove", move)
  })

  // cursor variants 
  const cursorVariants = {
    default: {
      x: cursor.x - 16,
      y: cursor.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursor.x - 75,
      y: cursor.y - 75,
      backgroundColor: "#fff",
      mixBlendMode: 'difference',

    }
  }

  // mouse enter handler
  const mouseEnterHandler = () => {
    setCursorBg("text")
  }
  // mouse leaver handler

  const mouseLeaveHandler = () => {
    setCursorBg("default")
  }

  return (
    <CursorContext.Provider value={ {cursorVariants, cursorBg, mouseEnterHandler, mouseLeaveHandler } }>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
