<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <p>{{ api }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
  name: 'CursosView',
  mixins: [fetchData],
  created() {
    this.fetchData('/cursos');
  },
};
</script>

<style></style>
