import https from "https";
import http from "http";
import { readFile } from "fs/promises";
import express from "express";
import * as Sentry from "@sentry/node";
import { RewriteFrames } from "@sentry/integrations";
import { logHandler } from "./utils/logHandler";
import { routeList } from "./config/routeList";
import { getRoot } from "./modules/getRoot";
import { getFourOhFour } from "./modules/getFourOhFour";
import { trackLinks } from "./modules/trackLinks";
import { connectDatabase } from "./database/connectDatabase";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  integrations: [
    new RewriteFrames({
      root: global.__dirname,
    }),
  ],
});

(async () => {
  await connectDatabase();

  const app = express();

  // mount your middleware and routes here

  for (const route of routeList) {
    app.get(route.route, async (_, res) => {
      await trackLinks(route.route).then(() => {
        res.redirect(307, route.url);
      });
    });
  }

  const root = getRoot();

  app.get("/", async (_, res) => {
    await trackLinks("index");
    res.send(root);
  });

  app.use(async (_, res) => {
    await trackLinks("404");
    res.status(404).send(getFourOhFour());
  });

  const httpServer = http.createServer(app);

  httpServer.listen(2080, () => {
    logHandler.log("http", "http server listening on port 2080");
  });

  if (process.env.NODE_ENV === "production") {
    const privateKey = await readFile(
      "/etc/letsencrypt/live/links.nhcarrigan.com/privkey.pem",
      "utf8"
    );
    const certificate = await readFile(
      "/etc/letsencrypt/live/links.nhcarrigan.com/cert.pem",
      "utf8"
    );
    const ca = await readFile(
      "/etc/letsencrypt/live/links.nhcarrigan.com/chain.pem",
      "utf8"
    );

    const credentials = {
      key: privateKey,
      cert: certificate,
      ca: ca,
    };

    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(2443, () => {
      logHandler.log("http", "https server listening on port 2443");
    });
  }
})();
