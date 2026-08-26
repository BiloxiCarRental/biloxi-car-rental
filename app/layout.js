import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://biloxicarrentals.com"),
  title: {
    default: "Biloxi Car Rental | Local Car Rental Biloxi MS",
    template: "%s | Biloxi Car Rental"
  },
  description:
    "Biloxi car rental for casino guests, Gulf Coast visitors and local drivers. Convenient local delivery options in Biloxi, plus service for Gulfport, Ocean Springs and D'Iberville.",
  alternates: { canonical: "https://biloxicarrentals.com" },
  openGraph: {
    title: "Biloxi Car Rental | Local Car Rental Biloxi MS",
    description: "Local Gulf Coast car rentals with convenient casino, hotel and nearby delivery options.",
    url: "https://biloxicarrentals.com",
    siteName: "Biloxi Car Rental",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Biloxi Car Rental",
    description: "Local car rental serving Biloxi and the Mississippi Gulf Coast."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CPNQN1EMJ3"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CPNQN1EMJ3');
            `,
          }}
         />

      <script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="h/fIX7t/cFRCznoXJYaWTw"
        async
      ></script>

    </head>

      <body>{children}</body>
    </html>
  );
}
