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
      });
      return withPWA(nextConfig);
  };
  
  export default nextConfigFunction;