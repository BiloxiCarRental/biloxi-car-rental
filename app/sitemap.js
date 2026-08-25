export default function sitemap() {
  const base = "https://biloxicarrental.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/car-rental-gulfport-ms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/car-rental-ocean-springs-ms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/car-rental-diberville-ms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/biloxi-casino-car-rental`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/monthly-car-rental-gulfport-ms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }
  ];
}
