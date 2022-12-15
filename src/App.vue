<template>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      routes: ["home", "about"],
      links: false,
    };
  },

  computed: {
    pubRoutes() {
      return this.routes.includes(this.$route.name);
    },
  },
};
</script>
