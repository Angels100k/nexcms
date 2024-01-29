/** @type {import('next').NextConfig} */

import { fileURLToPath } from 'url';
import path from 'path';

// Define __dirname and __filename equivalents
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // This function allows you to modify the webpack configuration
  
        // Example: Suppressing module parse warnings (not specifically the critical dependency one)
        config.module.exprContextCritical = false;
        config.resolve.alias['@/theme'] = path.join(__dirname, 'theme');
    
        // Return the modified config
        return config;
    },
};
  
export default nextConfig;