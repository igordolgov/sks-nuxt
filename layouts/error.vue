<template lang="pug">
v-app(dark)
  h1(v-if="error.statusCode === 404")
    | {{ pageNotFound }}
  h1(v-else)
    | {{ otherError }}
  nuxt-link(to="/") На главную
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Страница не найдена',
      otherError: 'Произошла ошибка',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
