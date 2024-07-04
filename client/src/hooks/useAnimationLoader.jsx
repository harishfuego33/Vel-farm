import { useEffect } from "react";
const AnimationLoader = (callback) => {
  useEffect(() => {
    const handleLoad = () => {
      callback();
    };
    const handleDOMContentLoaded = () => {
      callback();
    };
    window.addEventListener("load", handleLoad);
    document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    return () => {
      window.removeEventListener("load", handleLoad);
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, [callback]);
};
export default AnimationLoader;
