/**
 * product-taxonomy controller
 */
/*import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product-taxonomy.product-taxonomy');*/
/**
 *  product controller
 */
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::product-taxonomy.product-taxonomy', {
    getCount(ctx) {
        var { query } = ctx.request;
        return strapi.query('api::product-taxonomy.product-taxonomy').count({ where: query });
    }
});
