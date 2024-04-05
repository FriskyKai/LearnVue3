<template>
  <section class="bg-gradient bg-danger">
    <h2 class="text-center">Товары для чайников</h2>
    <div class="d-flex flex-wrap justify-content-center p-4">
      <div class="card m-2" v-for="product in products">
        <div class="card-header">{{ product.title }}</div>
        <div class="card-body">
          <img :src="product.thumbnail" :alt="product.title">
        </div>
        <div class="card-footer d-flex justify-content-between">
          <div class="fw-bold fst-italic">Цена: {{ product.price }}$</div>
          <div><RouterLink class="btn btn-dark" :to="'/api/' + product.id">Подробнее</RouterLink></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .card {
    width: 300px;
  }

  .card img {
    width: 280px;
    margin: 0 auto;
  }
</style>

<script>
  export default {
    // Переменные
    data() {
      return {
        products: [],
      }
    },
    // Методы
    methods: {
      getProducts() {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => this.products = data.products)
      }
    },
    // Метод выполнения при загрузке страницы
    created() {
      this.getProducts();
    }
  }
</script>