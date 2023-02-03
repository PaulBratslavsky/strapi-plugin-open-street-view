'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('open-street-map')
      .service('myService')
      .getWelcomeMessage();
  },
});
