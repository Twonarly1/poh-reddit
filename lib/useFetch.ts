// import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
// import { useAccount } from "wagmi";

// const useCallbackRef = (callback: any) => {
//   const callbackRef = useRef(callback);
//   useLayoutEffect(() => {
//     callbackRef.current = callback;
//   }, [callback]);
//   return callbackRef;
// };

// export const useFetch = (options: any) => {
//   const { isConnected, address } = useAccount();
//   const [isUserRegistered, setIsUserRegistered] = useState(null);
//   const savedOnSuccess = useCallbackRef(options.onSuccess);

//   useEffect(() => {
//     console.log("useFetch useEffect ");
//     if (options.url) {
//       let isCancelled = false;
//       fetch(options.url)
//         .then((response) => response.json())

//         .then((json) => {
//           if (isCancelled) {
//             savedOnSuccess.current?.(json);
//             setIsUserRegistered(json);
//           }
//         });
//       return () => {
//         isCancelled = true;
//       };
//     }
//   }, [options.url]);

//   return { isUserRegistered };
// };
export {};
