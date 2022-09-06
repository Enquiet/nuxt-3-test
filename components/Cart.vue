<template>
  <div class="cart">
    <div class="cart__price">
      {{ totalPrice }} руб.
    </div>
    <div class="cart__icon">
      <img src="@/assets/image/cart.svg" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import numberFormat from '@/helpers/numberFormat';
  import { useProductsState } from '@/stores/products'
  import { computed } from 'vue'

  const useProducts = useProductsState();

  const totalPrice = computed(() => numberFormat(useProducts.totalPrice))
</script>
<style lang="scss">
  .cart {
    display: flex;
    align-items: center;
    &__price {
      color: #fff;
      margin-right: 6px;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
    }
  }
</style>
