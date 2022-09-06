<template>
  <div class="cart">
    <div class="cart__price">
      {{ useProducts.totalPrice }} руб.
    </div>
    <div class="cart__icon">
      <img src="@/assets/image/cart.svg" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useProductsState } from '@/stores/products'
  const useProducts = useProductsState();
</script>
<style lang="scss">
  .cart {
    display: flex;
    align-items: center;
    &__price {
      color: #fff;
      margin-right: 6px;
    }
  }
</style>
