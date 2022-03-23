<template lang="pug">
v-card.rounded-0.elevation-0(height="93vh")
  v-card-text.pa-3.text-body-2
    v-row
      v-col.pa-1(cols="12" sm="4" md="3" lg="3" xl="3"
        v-for="product in products" :key="product.id")
        //- Эффект при наведении на карточку
        v-hover(v-slot="{ hover }")
          nuxt-link(:to="{ name: 'ProductItem', params: { id: product.id } }")
            v-card.pa-2(:elevation="hover ? 16 : 6"
              width="auto" min-height="188px")
              //- Картинка карточки в каталоге
              v-card.mb-1.grey.lighten-2
                v-img(:src="product.images[0]"
                  contain position="center" aspect-ratio="1")
              //- Название товара
              v-card(height="3.8em" flat).d-block.pt-1.pb-0.font-weight-bold
                | {{ product.title }}
              //- Количество товара
              v-card.d-block.pb-0.mb-0(v-if="product.quantity > 0" flat)
                | Кол-во: {{ product.quantity }} шт.
              //- Если товара нет в наличии (кол-во: 0)
              v-card.red--text.pb-0.mb-0(
                  v-if="product.quantity === 0 || product.quantity === ''" flat)
                | Нет в наличии
              //- Состояние товара (новый или б/у)
              v-card.pb-0.mb-0(flat)
                | {{ product.condition }}
              //- Стоимость товара
              v-card.pb-1.mb-0(flat)
                | Цена: {{ product.price }} ₽
</template>

<script>
// Импортируем справочник товаров (в переменную 'products'):
import products from '@/store/products.js'
// Импортируем Шину событий:
// import eventBus from '@/eventBus'

export default {
  name: 'products-list-page',

  props: {
    /* Входные параметры, получаемые из родительского компонента
    (в зависимости от того, какая вкладка выбрана) */
    products: {
      type: Array, // тип входного параметра
    },
    nextPageName: {
      type: String, // тип входного параметра
    },
  },

  data: () => ({
    // товары берём из соответствующей вкладки и записываем в переменную products
    // products: products.motors,
  })
}
</script>

<style scoped>
v-card-text {
  line-height: 1.2;
}
</style>