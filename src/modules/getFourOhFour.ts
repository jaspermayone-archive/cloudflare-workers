/**
 * This middleware is used to generate an SSR 404 page
 * when an invalid link is requested.
 *
 * @returns {string} An HTML string.
 */
export const getFourOhFour = (): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * {
            font-family: Courier, monospace;
        }
        </style>
      <title>nhcarrigan links</title>
      </head>
      <body>
      <h1>Oh noes!</h1>
      <p>You found a link that no longer has a redirect! Please <a href='/discord'>join our chat</a> and let us know where you found this link.</p>
      </body>
    </html>
    `;
};
