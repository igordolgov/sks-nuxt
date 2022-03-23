<template lang="pug">
v-app
  v-main.grey.lighten-2(style="padding: 50px 0px 0px;")
    v-container
      AppHeader
      v-row
        v-col.pa-0.hidden-xs-only(cols="12" sm="4" md="3" lg="2")
          AppSidebar
        v-col.pa-0(cols="12" sm="8" md="9" lg="10")
          //- Аналог vue-router, указывает место, где рендерятся компоненты
          Nuxt.grey.lighten-2
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
    }
  },
}
</script>

<style scoped>
</style>
