/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.js

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: ['firebasestorage.googleapis.com', 'lh3.googleusercontent.com'],
//         port: '',
//         pathname: '/a/ACg8ocIUuyuloe2AwFr1OIt6pgveE5E9RoNKM9uJ74sR_YrHziGRoBQ=s96-c',
//       }
//     ],
//   },
// };
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'firebasestorage.googleapis.com',
//         port: '',
//         pathname: '/a/ACg8ocIUuyuloe2AwFr1OIt6pgveE5E9RoNKM9uJ74sR_YrHziGRoBQ=s96-c',
//       },
//       {
//         protocol: 'https',
//         hostname: 'lh3.googleusercontent.com',
//         port: '',
//         pathname: '/a/ACg8ocIUuyuloe2AwFr1OIt6pgveE5E9RoNKM9uJ74sR_YrHziGRoBQ=s96-c',
//       }
//     ],
//   },
// };
 module.exports = {
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'firebasestorage.googleapis.com',
         port: '',
         pathname: '/**', // This pattern will match all paths under this hostname
       },
       // Add other remote patterns if needed
       {
         protocol: 'https',
         hostname: 'lh3.googleusercontent.com',
         port: '',
         pathname: '/**', // This pattern will match all paths under this hostname
       },
    ],
   },
 };
// module.exports = {
//   images: {
//     domains: [
//       'firebasestorage.googleapis.com',
//       'lh3.googleusercontent.com',
//       // Add other domains if needed
//     ],
//   },
// };




