export const pageResolvers = {
  Query: {
    page: () => ({ id: 1, url: '/test', content: 'foo bar baz' }),
  },

  Page: {},
};
