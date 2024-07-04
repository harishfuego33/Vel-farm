import { useEffect } from "react";
const AnimationLoader = (callback) => {
  useEffect(() => {
    const handleLoad = () => {
      console.log("desktop");
      callback();
    };
    const handleDOMContentLoaded = () => {
      console.log("mobile");
      callback();
    };
    document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, [callback]);
};
export default AnimationLoader;
