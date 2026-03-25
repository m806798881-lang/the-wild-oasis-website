/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wehcppzdczkkcjvkjfru.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  //静态网站生成，部署到CDN，build后所有url都是静态的，Image优化组件无法使用，需要使用cloudniry优化图片
  // output: "export",
};

export default nextConfig;
