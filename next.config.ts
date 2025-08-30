import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
    turbo: {
      rules: {
        // Ignore LICENSE and other non-code files
        '*.LICENSE': { loaders: ['ignore'] },
        '*.license': { loaders: ['ignore'] },
        'LICENSE': { loaders: ['ignore'] },
      },
    },
  },
};

export default nextConfig;
