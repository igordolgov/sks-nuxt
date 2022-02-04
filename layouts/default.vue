<template>
  <v-app>
    <v-main class="grey lighten-2">
      <v-container>
        <MainCatalog />
        <!-- Аналог vue-router, указывает место, где рендерятся компоненты -->
        <!-- <Nuxt /> -->
      </v-container>
    </v-main>

    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style scoped>
  /* main {
    background-color: red;
  } */
</style>
