const webpack = require("webpack");

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [
    // CSS file in the project
    "~/assets/css/reset.css",
  ],
};
