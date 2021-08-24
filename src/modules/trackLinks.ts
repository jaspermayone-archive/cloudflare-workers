import linkTracking from "../database/models/LinkTracking";

/**
 * Function to track when a route is followed.
 *
 * @param {string} route - The link to track.
 */
export const trackLinks = async (route: string): Promise<void> => {
  const linkData =
    (await linkTracking.findOne({ route })) ||
    (await linkTracking.create({ route, uses: 0, lastUsed: "" }));

  linkData.uses++;
  linkData.lastUsed = new Date(Date.now()).toLocaleString();
  await linkData.save();
  return;
};
