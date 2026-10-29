import type { CapacitorConfig } from "@capacitor/cli";

const appWebUrl = process.env.APP_WEB_URL?.trim();

if (!appWebUrl) {
  throw new Error(
    "APP_WEB_URL is required. Set it to your deployed app's HTTPS URL before building the Android APK.",
  );
}

const parsedUrl = new URL(appWebUrl);
if (parsedUrl.protocol !== "https:") {
  throw new Error("APP_WEB_URL must use HTTPS; localhost URLs will not work on a published APK.");
}

const config: CapacitorConfig = {
  appId: "com.suhan.campuscompanion",
  appName: "Campus Companion",
  webDir: "mobile-shell",
  server: {
    // This APK is a thin WebView wrapper around the deployed web app.
    // Keep the URL public and HTTPS; do not put credentials in this URL.
    url: appWebUrl,
    cleartext: false,
  },
};

export default config;
