<template lang="pug">
.pa-0
  v-row.pb-0(justify="center")
    //- Фотографии товара
    v-col.pa-0.mb-3(cols="12" sm="7" md="9" lg="7" xl="7")
      v-sheet.cards-height.pa-0.mx-auto.d-flex.align-center.grey.lighten-2.elevation-10
        v-carousel.pa-0(v-model="model" height="100%" :aspect-ratio="1" light hide-delimiters)
          v-carousel-item(:src="image.src"
            v-for="(image, i) in product.images" :key="i"
            contain eager height="100%" :aspect-ratio="1")
    //- Описание товара
    v-col.py-0.px-sm-0.pb-sm-3.pr-lg-0.mx-sm-0(col="12" sm="3" md="2" xl="2")
      v-sheet.fill-height.pa-2.mx-sm-auto.elevation-10.rounded-lg
        //- Название товара
        span.d-block.pt-1.px-2.pb-0.font-weight-bold.text-body-2.text-md-body-1
          | {{ product.title }}
        //- Описание товара
        span.d-block.pl-2.pb-0.mb-0.text-body-2.text-md-body-1
          | {{ product.description }}
        .text-body-2.pa-0
          //- Количество товара
          span.d-block.pl-2.pb-0.mb-0.text-md-body-1(v-if="product.quantity > 0")
            | Кол-во: {{ product.quantity }} шт.
          //- Если товара нет в наличии (кол-во: 0)
          span.width-50px.pl-2.pb-0.mb-0.red--text.text-md-body-1(
            v-if="product.quantity === 0 || product.quantity === ''")
            | Нет в наличии
          //- Состояние товара (новый или б/у)
          span.d-block.pl-2.pb-0.mb-0.text-md-body-1
            | {{ product.condition }}
          //- Стоимость товара
          span.d-block.pl-2.pb-1.mb-0.text-md-body-1
            | Цена: {{ product.price }} ₽
</template>

<script>
// Импортируем справочник товаров (в переменную 'products')
import products from '@/store/products.js'
// Импортируем справочник категорий товаров (в переменную 'products')
// import categories from '@/store/categories.js'
// import eventBus from '@/eventBus';

export default {
  name: 'products-page',

  props: ['pageParams'],

  components: {
    ButtonBack,
  },

  data: () => ({
    model: 0,
    product: 'null',
  }),

  // Информация о товаре
  created() {
    /* Фильтруем список товаров и оставляем тот товар, который просматриваем,
      то есть у которого id совпадает с id переданным через входные параметры */
    for (let key of Object.keys(products)) {
      const product = products[key].find(
        (product) => product.id == this.$route.params.id
      );
      if (product) {
        this.product = product;
        break;
      }
    }
  },

  methods: {
    openProduct(product) {
      this.$router.push('/products/' + product)
    },
  },
}
</script>

<style scoped>
.mdi-chevron-right,
.mdi-chevron-left {
  color: white !important;
}

.mdi-minus {
  color: black !important;
}

@media (min-width: 1900px) {
  .cards-height {
    height: 850px !important;
    width: 850px !important;
  }
}

@media (min-width: 1060px) and (max-width: 1920px) and (orientation: portrait) {
  .cards-height {
    height: 860px !important;
    width: 860px !important;
  }
}

@media (min-width: 1179px) and (max-width: 1920px) and (orientation: portrait) {
  .cards-height {
    height: 754px !important;
    width: 754px !important;
  }
}

@media (min-width: 1179px) and (max-width: 1919px) and (orientation: landscape) {
  .cards-height {
    height: 590px !important;
    width: 590px !important;
  }
}

@media (min-width: 1024px) and (max-width: 1180px) and (orientation: landscape) {
  .cards-height {
    height: 700px !important;
    width: 700px !important;
  }
}

@media (min-width: 640px) and (max-width: 1023px) and (orientation: landscape) {
  .cards-height {
    height: 360px !important;
    width: 360px !important;
  }
}

@media (min-width: 640px) and (max-width: 900px) and (orientation: portrait) {
  .cards-height {
    height: 416px !important;
    width: 416px !important;
  }
}

@media (min-width: 740px) and (max-width: 1023px) and (orientation: landscape) {
  .cards-height {
    height: 300px !important;
    width: 300px !important;
  }
}

@media (min-width: 640px) and (max-width: 680px) and (orientation: landscape) {
  .cards-height {
    height: 290px !important;
    width: 290px !important;
  }
}

@media (max-width: 639px) and (orientation: portrait) {
  .cards-height {
    width: 100% !important;
  }
}
</style>