<template>
  <div class="page">
    <ProductList :list="useProducts.productList" />
    <FooterMenu />
  </div>
</template>
<script setup lang="ts">
  import { useProductsState } from '@/stores/products'
  import { watch } from 'vue'
  import { useRoute } from 'vue-router';

  const $route = useRoute();

  const useProducts = useProductsState();

  const getProduct = async (page: number = 1) => {
    await useProducts.getProductList(page);
  }
  watch(() => $route.query.page, () => {
    if($route.name === 'index') { getProduct(Number($route?.query.page) || 1) }
  }, { immediate: true })
</script>
