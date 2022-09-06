<template>
  <div class="list-product">
    <ProductCard
      v-for="item in list"
      :key="item.id"
      :data="item"
      />
  </div>
</template>
<script setup lang="ts">
 defineProps({
    list: {
      type: Array,
      default: () => []
    }
  })
</script>
<style lang="scss">
  .list-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 320px;
    margin: 0 auto;

    @media(min-width: 768px) {
      max-width: 700px;
      margin:  0 auto;
    }
  }
</style>
