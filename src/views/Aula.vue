<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h2>{{ api.nome }}</h2>
        <div class="video">
          <iframe
            :src="`https://www.youtube.com/embed/${api.youtube}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';

export default {
  name: 'AulaView',
  props: ['aula'],
  mixins: [fetchData],
  created() {
    this.fetchData(`/aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`/aula/${to.params.aula}`);
    next();
  },
};
</script>

<style>
.video {
  position: relative;
  padding-bottom: 56.25%;
}
.video iframe {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
</style>
