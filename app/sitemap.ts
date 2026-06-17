import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://calculadora-newton-raphson-bct.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://calculadora-newton-raphson-bct.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://calculadora-newton-raphson-bct.vercel.app/blog",
      lastModified: new Date(),
    },
    {
      url: "https://calculadora-newton-raphson-bct.vercel.app/blog/que-es-newton-raphson",
      lastModified: new Date(),
    },
    {
      url: "https://calculadora-newton-raphson-bct.vercel.app/blog/historia-newton-raphson",
      lastModified: new Date(),
    },
    {
      url: "https://calculadora-newton-raphson-bct.vercel.app/blog/aplicaciones-newton-raphson",
      lastModified: new Date(),
    },
    {
      url: "https://calculadora-newton-raphson-bct.vercel.app/docs",
      lastModified: new Date(),
    },
    {
      url: "https://calculadora-newton-raphson-bct.vercel.app/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://calculadora-newton-raphson-bct.vercel.app/terms",
      lastModified: new Date(),
    },
  ];
}