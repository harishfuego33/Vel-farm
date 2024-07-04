// import { useEffect } from "react";

// const MobileLoader = (callback) => {
//   useEffect(() => {
//     const checkScreenWidth = () => {
//       if (window.innerWidth < 768) {
//         callback();
//       }
//     };
//     const handleDOMContentLoaded = () => {
//       callback();
//     };
//     checkScreenWidth();
//     window.addEventListener("resize", checkScreenWidth);
//     document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
//     return () => {
//       window.removeEventListener("resize", checkScreenWidth);
//       document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
//     };
//   }, [callback]);
// };
// export default MobileLoader;
