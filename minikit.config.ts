const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    "header": "eyJmaWQiOjQyNjc1MCwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDIwMjNkNDM1MTc2MkI3OGJDMDM1RDI0ODJGMzE0NEZDODQwYjk4MjIifQ",
    "payload": "eyJkb21haW4iOiJhcmdvbmF1LnZlcmNlbC5hcHAifQ",
    "signature": "udD7t8VLNWVdRpu5S1GBf1hKXlg1qU9Vmuqq9gQ4uQ1N0hT+YiElmwGnMUPIgkzgET0DOXie2RYpY8ahIzaawBs="
  },
  miniapp: {
    version: "1",
    name: "Cubey", 
    subtitle: "Your AI Ad Companion", 
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
  baseBuilder: {
    allowedAddresses: ["0xBC929124B8f96310BB30853C80Eea322ADe08107"]
  }
} as const;

