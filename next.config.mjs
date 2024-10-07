/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: "export", // used to Export Static HTML Page with Build
  redirects: async () => {
    return [
      {
        source: "/users",
        destination: "/",
        permanent: false,
      },
      {
        source: "/users/:userId",
        destination: "/",
        permanent: false,
      },
      {
        source: "/admin",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
