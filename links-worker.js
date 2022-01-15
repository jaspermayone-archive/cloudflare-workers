const redirectMap = new Map([
  ["discord", "https://discord.gg/HSupF99kpq"],
  ["github", "https://github.com/j-dogcoder"],
  ["instagram", "https://instagram.com/jasper_mayone"],
  ["linkedin", "https://www.linkedin.com/in/jasper-mayone-70033b164/"],
  ["reddit", "https://www.reddit.com/user/j-dogcoder"],
  ["stackoverflow", "https://stackoverflow.com/users/15201146/j-dogcoder"],
  ["twitch", "https://www.twitch.tv/Jdogcoder0803"],
  ["twitter", "https://twitter.com/jdogcoder"],
  ["pinterest", "https://www.pinterest.com/jdogcoder/"],
  ["youtube", "https://www.youtube.com/channel/UCRiTaSZTy9suw8cAABxlVUw"],
  ["cyaneus", "https://cyaneus.co"],
]);

async function handleRequest(req) {
  const location = redirectMap.get(new URL(req.url).pathname.split("/")[1]);
  if (location) {
    return Response.redirect(location, 301);
  }
  return Response.redirect("https://www./404.html", 301);
}

addEventListener("fetch", async (event) => {
  event.respondWith(handleRequest(event.request));
});
