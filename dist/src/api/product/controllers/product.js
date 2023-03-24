"use strict";
/**
 * product controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
//export default factories.createCoreController('api::product.product');
'use strict';
/**
 *  product controller
 */
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = strapi_1.factories.createCoreController('api::product.product', {
    getCount(ctx) {
        var { query } = ctx.request;
        return strapi.query('api::product.product').count({ where: query });
    }
});
