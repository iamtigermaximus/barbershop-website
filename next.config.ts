import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // ✅ Native styled-components support (with SWC)
  },
};

export default nextConfig;
