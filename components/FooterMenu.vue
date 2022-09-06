<template>
  <div class="footer-menu">
    <div class="footer-menu__wrapper">
      <div class="footer-menu__inner">
        <Pagination />
        <Cart class="footer-menu__cart"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
  .footer-menu {
    display: flex;
    position: sticky;
    bottom: 0;
    background: #000000;
    opacity: 0.9;
    padding: 18px;

    &__wrapper {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      @media(min-width: 768px) {
        width: 700px;
        margin: 0 auto;
      }
    }

    &__inner {
      display: flex;
      width: 430px;
      justify-content: space-between;
      align-items: center;
      @media(min-width: 480px) {
        margin-left: 38%;
      }
    }
  }
</style>
