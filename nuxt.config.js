module.exports = {
  head: {
    title: "Azka Bakery",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Sample ecommerce website by Yasmin ZY"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Dancing+Script|Roboto:400,700"
      },
      {
        rel: "stylesheet",
        href:
          "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.min.js",
        integrity: "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=",
        crossorigin: "anonymous",
        body: true
      },
      {
        src:
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
        integrity:
          "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
        crossorigin: "anonymous",
        body: true
      },
      {
        src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
        id: "snipcart",
        "data-api-key":
          "YzQxZGI3NDAtNjFkMS00ZmUwLTkzNjgtNzc0YzgxOGE4YTI4NjM2MjMxNjMwMTA1OTMzMDk2",
        body: true
      }
    ]
  },
  css: [
    "aos/dist/aos.css",
    "~/assets/css/custom-bootstrap.css",
    "~/assets/snipcart/custom-snipcart.css"
  ],
  loading: { color: "#ff9800" },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    vendor: ["aos", "vue-lazyload", "vue2-google-maps"]
  },
  plugins: [
    { src: "~/plugins/aos.js", ssr: false },
    "~/plugins/vue-lazyload.js",
    "~/plugins/vue2-google-maps.js"
  ],
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  }
};
