const redirectMap = new Map([
  ["codepen", "https://codepen.io/nhcarrigan"],
  ["discord", "https://discord.gg/yMBWgETTJu"],
  ["facebook", "https://facebook.com/nhcarrigan"],
  ["freecodecamp", "https://forum.freecodecamp.org/u/nhcarrigan"],
  ["github", "https://github.com/nhcarrigan"],
  [
    "habitica",
    "https://habitica.com/profile/285a3335-33b9-473f-8d80-085c04f207bc",
  ],
  ["instagram", "https://instagram.com/nhcarrigan"],
  ["keybase", "https://keybase.io/nhcarrigan"],
  ["kofi", "https://ko-fi.com/nhcarrigan"],
  ["linkedin", "https://www.linkedin.com/in/nhcarrigan"],
  ["patreon", "https://www.patreon.com/nhcarrigan"],
  ["paypal", "https://paypal.me/nhcarrigan"],
  ["reddit", "https://www.reddit.com/user/nhcarrigan"],
  ["replit", "https://replit.com/@nhcarrigan"],
  ["spotify", "https://open.spotify.com/user/31p7amjwznzhi4uijpbjusk7y2by"],
  ["steam", "https://steamcommunity.com/id/nhcarrigan"],
  ["twitch", "https://twitch.tv/nhcarrigan"],
  ["twitter", "https://twitter.com/nhcarrigan"],
  [
    "feedback",
    "https://docs.google.com/forms/d/e/1FAIpQLSfJldksG5ZtA0LPkstV1rj1go5bJI7Af8EjAazjFDZbmZbBpg/viewform?usp=sf_link",
  ],
  ["miku", "https://www.youtube.com/watch?v=CW9gK2_bCyk"],
  ["free-crypto", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
]);

async function handleRequest(req) {
  const location = redirectMap.get(new URL(req.url).pathname.split("/")[1]);
  if (location) {
    return Response.redirect(location, 301);
  }
  return Response.redirect("https://www.nhcarrigan.com/404.html", 301);
}

addEventListener("fetch", async (event) => {
  event.respondWith(handleRequest(event.request));
});
