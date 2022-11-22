export default {
  routes: [
    {
      method: "GET",
      path: "/content",
      handler: "content.fetchAllContent",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/content/example",
      handler: "content.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
