/**
 * A set of functions called "actions" for `content`
 */

export default {
  fetchAllContent: async (ctx, next) => {
    const locale = ctx.params.locale || ctx.request.query.locale || "en";
    console.info("locale", locale);

    ctx.body = await strapi
      .service("api::content.content")
      .fetchAllContent({ locale });
  },
};
