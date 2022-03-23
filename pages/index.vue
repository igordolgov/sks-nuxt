<template lang="pug">
v-card
  v-card-text.pa-4
    v-row.white
      v-col.black--text
        v-container.pa-0
          h1.text-h5.font-weight-bold.mb-2
            | Приветствуем Вас на нашем сайте!
          v-divider.mb-1
          span.text-subtitle-1.font-italic
            | Надеемся, что Вы найдёте то, что искали
          v-img(src="https://postervdom.ru/upload/shop_3/2/1/0/item_2105/item_2105.jpg")
</template>

<script>
export default {
  name: 'main-page',

  data: () => ({
  }),
};
</script>

<style scoped>
</style>