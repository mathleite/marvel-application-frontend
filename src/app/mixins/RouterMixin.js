export default {
  methods: {
    $_routerMixin_redirectTo(targetRoute) {
      if (typeof targetRoute !== 'string') {
        throw TypeError;
      }

      const { $router } = this;

      $router.push(targetRoute);
    },
  },
};
