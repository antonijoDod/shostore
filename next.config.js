const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    images: {
        domains: ["cdn.shopify.com"],
    },
});
