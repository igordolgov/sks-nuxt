<template lang="pug">
.app-header-component
  v-app-bar.primary(app dense flat dark)
    v-container.px-0(d-flex)
      v-img.mr-2.my-auto(src="img/logo-sks-white.png"
        max-width="53px" max-height="42px" position="center")
      v-app-bar-title.text-body-1.my-auto(v-text="'SKSAVIA.RU'")
      v-spacer
      v-btn.primary.lighten-1.hidden-xs-only.ml-3.py-0.elevation-2.rounded-xl(
        :href="item.adress" v-for="item in menuItems" :key="item.index")
        | {{ item.title }}
      v-app-bar-nav-icon.hidden-sm-and-up(@click.stop="drawer = !drawer")
  v-navigation-drawer(v-model="drawer" temporary fixed width="auto")
    v-list(nav dense)
      v-list-item-group(v-model="group")
        v-list-item(:href="item.adress" v-for="item in menuItems" :key="item.index")
          v-btn.secondary.lighten-3.white--text.my-1.rounded-lg(elevation="6" x-large)
            v-list-item-title {{ item.title }}
</template>

<script>
export default {
  name: 'AppHeader-component',
  data: () => ({
    drawer: false, // Отображение или скрытие мобильного меню
    group: null,
  }),
  computed: {
    menuItems() {
      return [
        {
          index: '1',
          title: '+7(903)425-30-68',
          adress: 'tel:+79034253068',
        },
        {
          index: '2',
          title: 'sksavia@mail.ru',
          adress: 'mailto:sksavia@mail.ru',
        },
      ]
    },
  },
}
</script>

<style scoped>
</style>