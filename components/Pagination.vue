<template>
  <div class="pagination">
    <div
      :class="['pagination__item', {'is-active': 1 === currentPage }]"
      @click="setPage(1)"
    >
      1
    </div>
    <div v-if="currentPage >= 5" class="pagination__interfal">...</div>
    <div
      v-for="page in computedPagination"
      :key="page"
      :class="['pagination__item', {'is-active': page === currentPage }]"
      @click="setPage(page)"
    >
      {{ page }}
    </div>
    <div v-if="currentPage <= 55" class="pagination__interfal">...</div>
    <div
      :class="['pagination__item', {'is-active': countPage === currentPage }]"
      @click="setPage(countPage)"
    >
      {{ countPage }}
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, computed, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router';

  const $router = useRouter();
  const $route = useRoute();

  const currentPage= ref(Number($route.query.page) || 1)
  const countPage = ref(59)
  const pages = reactive([])

  const computedPagination = computed(():number[] => {
    // для красивой пагинации
    switch(true) {
      case currentPage.value < 5:
        return pages.slice(1, 5);
      case currentPage.value >= 5 && currentPage.value < 56:
        return pages.slice(currentPage.value - 2, currentPage.value + 1);
      case currentPage.value >= 55:
        return pages.slice(54, countPage.value - 1);
    }
  })

  const setPage = (page: number) => {
    currentPage.value = page;
    $router.push({
      path: $route.path,
      query: currentPage.value !== 1 ? { page: currentPage.value } : {}
    })
  }

  onMounted(() => {
    for(let i = 1; i <= countPage.value; i++ ) {
      pages.push(i)
    }
  })
</script>
<style lang="scss">
  .pagination {
    display: flex;
    align-items: center;
    &__interfal,
    &__item {
      font-weight: 400;
      font-size: 14px;
      line-height: 60px;
      color: #FFFFFF;
      cursor: pointer;
      margin-right: 12px;

      &.is-active {
        font-weight: 700;
        font-size: 18px;
        line-height: 60px;
      }
    }
  }
</style>
