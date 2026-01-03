import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // settingan untuk mengambil image dari url
  images: {
    // mengizinkan url gambar dari pihak eksternal
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cloud-api.hamzzz.my.id",
    //     port: "",
    //     pathname: "/file/**", // Izinkan semua file di folder /file
    //   },
    // ],
  },
};

export default nextConfig;
