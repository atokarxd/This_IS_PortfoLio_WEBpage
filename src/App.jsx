import React, { useState, useEffect } from "react";
import MainContent from "./Components/Body.jsx";
import Preloader from "./Reload.jsx";

//Test File
//import Test from "./Components/Intro.jsx";


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a 3-second loading time

    return () => clearTimeout(loadTimer);
  }, []);


  return (
    <>
      {isLoading ? <Preloader /> : <MainContent />}
    </>
  )


  /*return(
    <>
      <Test />
    </>
  );*/

}

export default App
