<template>
  <div class="user-info">
  <img class="user-info__img" :src="data.profile_image.large || ''"/>
  <!-- <div class="user-info__img"></div> -->
  <div class="user-info__info">
    <div class="user-info__name">
      {{ data.first_name }} {{ data.last_name}}
    </div>
    <div v-if="data.social.instagram_username"  class="user-info__tag">
      @{{ data.social.instagram_username }}
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
  defineProps({
    data: {
      type: Object,
      default: () => {}
    }
  })
</script>
<style lang="scss">
.user-info {
  display: flex;
  padding: 10px 10px 13px 10px;
  &__img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: blue;
  }
  &__info {
    margin-left: 10px;
  }

  &__name {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #333333;
    margin-bottom: 3px;
  }
  &__tag {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #8D8D8D;
  }
}
</style>
