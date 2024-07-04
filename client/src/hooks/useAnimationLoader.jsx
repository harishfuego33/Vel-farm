import { useEffect } from "react";
const AnimationLoader = (callback) => {
  useEffect(() => {
    const handleLoad = () => {
      callback();
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [callback]);
};
export default AnimationLoader;
