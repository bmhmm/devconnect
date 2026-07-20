// import type { NextConfig } from 'next'
// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'nangbmajrjhsmcipboys.supabase.co',
//         port: '',
//         pathname: '/storage/v1/object/public/**',
//       },
//     ],
//   },
// }

// export default nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'nangbmajrjhsmcipboys.supabase.co',
//         port: '',
//         pathname: '/storage/v1/object/public/**',
//       },
//     ],
//   },
// };

// module.exports = nextConfig;

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nangbmajrjhsmcipboys.supabase.co",
      },
    ],
  },
}

export default nextConfig