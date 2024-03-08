import {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } from "next/constants.js";
  
  /** @type {import("next").NextConfig} */
  const nextConfig = {
    reactStrictMode: false,
  };
  
  const nextConfigFunction = async (phase) => {
    const withPWA = (await import("@ducanh2912/next-pwa")).default({
        dest: "public",
        cacheOnFrontEndNav:true,
        aggressiveFrontEndNavCaching:true,
        reloadOnOnline:true,
        swcMinify:true,
        disable: false,
        workboxOptions:{ disableDevLogs:true },        
        fallbacks: {},
      });
      return withPWA(nextConfig);
    // if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    //   const withPWA = (await import("@ducanh2912/next-pwa")).default({
    //     dest: "public",
    //     fallbacks: {}
    //   });
    //   return withPWA(nextConfig);
    // }
    // return nextConfig;
  };
  
  export default nextConfigFunction;