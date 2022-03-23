<template lang="pug">
.app-sidebar-component
  v-list.px-2.px-sm-3.grey.lighten-3.fill-height
    v-btn(to="/" block
      active-class="primary darken-1 elevation-6"
    ).font-weight-bold.text-caption.text-sm-body-2.text-center.pa-2.mt-1.mb-3.mb-2.rounded-lg.elevation-6
      | Главная
    h2.grey--text.mb-1.text-center
      | Каталог
    v-btn(:to="tab.route" v-for="tab in tabs" :key="tab.route" block
      active-class="primary darken-1 elevation-6"
    ).grey.lighten-3.font-weight-bold.text-caption.text-sm-body-2.rounded-lg.elevation-6.pa-2.mb-2
      | {{ tab.title }}
      v-spacer
</template>

<script>
export default {
  name: 'app-sidebar-component',

  components: {},

  data: () => ({
    // Какие входные параметры принимает компонент
    props: ["products"],

    // НАЗВАНИЯ ВКЛАДОК:
    tabs: [
      {
        title: 'Моторы',
        route: '/motors',
      },
      {
        title: 'Пропеллеры',
        route: '/propellers',
      },
      {
        title: 'Стартеры',
        route: '/starters',
      },
    ],
  }),
}
</script>

<style scoped>
</style>
