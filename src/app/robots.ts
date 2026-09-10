import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        /* Internal design-review route, not part of the public site. */
        disallow: ["/hero-lab", "/design-lab"],
      },
    ],
    sitemap: "https://newhorizonng.com/sitemap.xml",
  };
}
