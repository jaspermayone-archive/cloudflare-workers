import { routeList } from "../config/routeList";

/**
 * Function to generate an HTML output for the root path.
 */
export const getRoot = (): string => {
  let routesHTML = `
    <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * {
              font-family: Courier, monospace;
          }
          ul {
              list-style-type: none;
          }
          </style>
        <title>nhcarrigan links</title>
        </head>
        <body>
        <h1>nhcarrigan links</h1>
        <p>This site serves as a redirect tool for my various social links. Click one below to see!</p>
        <ul>
    `;

  for (const route of routeList) {
    routesHTML += `
            <li><a href="${route.url}">${route.route}</a></li>
        `;
  }
  routesHTML += `</ul>
        </body> 
      </html>`;
  return routesHTML;
};
