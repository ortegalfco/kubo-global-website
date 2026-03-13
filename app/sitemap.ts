export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kubo-global.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/domains`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/model`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/approach`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date()
    }
  ];
}