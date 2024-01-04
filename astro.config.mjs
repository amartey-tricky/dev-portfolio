import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    sentry({
      dsn: "https://2265045c8241dcc41707bff4bfa67f78@o4506514612813824.ingest.sentry.io/4506514688966656",
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});
