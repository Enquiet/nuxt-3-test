<template>
  <div class="card-list">
      <UserInfo
        :data="data.user"
        @click.native="$router.push({ path: `/author/${data.user.username}` })"
        class="card-list__user-info"
      />
      <div class="card-list__body">
        <img class="card-list__img" :src="data.urls.raw" />
      </div>
      <ProductPrice
        :price="data.price"
        @add-product="productCart"
        @away-amount="productCart"
      />
  </div>
</template>
<script setup lang="ts">
  import { toRefs } from 'vue';
  import { useProductsState } from '@/stores/products'
  import { ProductCart } from '@/types/product'
  const props = defineProps({
    data: {
      type: Object,
      default: () => {}
    }
  })
  const { data } = toRefs(props);

  const useProducts = useProductsState();
  const productCart = (amount) => {
    const product: ProductCart = {
      id: data.value.id,
      amount,
      price: data.value.price
    }
    useProducts.productCard(product);
  }

</script>
<style lang="scss">
  .card-list {
    width: 320px;

    &__img {
      width: 100%;
      height: 230px;
      object-fit: contain;
    }

    &__user-info {
      cursor: pointer;
    }
  }

</style>
