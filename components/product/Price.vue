<template>
  <div class="product-price">
    <div class="product-price__wrapper">
      <div class="product-price__actions">
        <button @click="onClickAddAmount" class="product-price__btn is-addition">
          <img src="@/assets/image/plus.png" />
        </button>
        <button @click="onClickAwayAmount" :disabled="notAdded" class="product-price__btn is-subtraction">
          <img src="@/assets/image/minus.png" />
        </button>
      </div>
      <din class="product-price__amount">{{ amount }}</din>
    </div>
    <div class="product-price__price">
      {{ priceFormat }} руб.
    </div>
  </div>
</template>
<script setup lang="ts">
  import numberFormat from '~~/helpers/numberFormat';
  import { ref, computed, toRefs } from 'vue'
  const emit = defineEmits(['add-product', 'away-amount'])
  const props = defineProps({
    price: {
      type: Number,
      default: 0
    }
  })
  const { price } = toRefs(props);

  const amount = ref(0);
  const notAdded = computed(():boolean  => amount.value === 0);

  const priceFormat = computed(():string => numberFormat(price.value))

  const onClickAddAmount = () => {
    amount.value++
    emit('add-product', amount.value)
  };
  const onClickAwayAmount = () => {
    amount.value--
    emit('away-amount', amount.value)
  };
</script>
<style lang="scss">
  .product-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 8px 5px;
    &__wrapper {
      display: flex;
      align-items: center;
    }
    &__actions {
      display: flex;
      align-items: center;
    }
    &__btn {
      position: relative;
      padding: 0;
      width: 17px;
      height: 17px;
      background: transparent;
      cursor: pointer;
      border: none;
    }

    &__amount {
      font-weight: 700;
      font-size: 10px;
      line-height: 14px;
      color: #333333;
      margin-left: 10px;
      font-weight: 700;
    }

    &__price {
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      font-weight: 700;
      color: #333333;
    }
  }
</style>
