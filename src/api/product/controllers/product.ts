/**
 * product controller
 */

import { factories } from '@strapi/strapi'

//export default factories.createCoreController('api::product.product');

'use strict';

/**
 *  product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = factories.createCoreController('api::product.product', {
  getCount(ctx) {
    var { query } = ctx.request
    return strapi.query('api::product.product').count({ where: query });
  }
});
