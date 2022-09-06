<template>
  <div>
    <UserInfo v-if="useAuthor.author.id" :data="useAuthor.author" />
  </div>
</template>
<script setup lang="ts">
    import { useAuthorState } from '@/stores/author'
    import { useRoute } from 'vue-router';
    const useAuthor = useAuthorState();
    const $route = useRoute();

    const getAuthor = async() => {
      await useAuthor.getAuthor($route.params.id);
    }

    watch(()=> $route.params.id, () => {
      getAuthor()
    }, {
      immediate: true
    })
</script>
