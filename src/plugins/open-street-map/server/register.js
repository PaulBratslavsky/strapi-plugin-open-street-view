'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'open-street-map-field',
    plugin: 'open-street-map',
    type: 'json',
  });
};