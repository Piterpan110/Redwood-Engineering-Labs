import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

function ogImageUrl(): string {
  const fromEnv = process.env.VITE_SITE_URL?.replace(/\/$/, "");
  const vercel =
    process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`;
  const base = fromEnv || vercel || "";
  return base ? `${base}/redwood-logo.png` : "/redwood-logo.png";
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "html-og-image",
      transformIndexHtml(html) {
        const url = ogImageUrl();
        return html.replaceAll("__OG_IMAGE__", url);
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
