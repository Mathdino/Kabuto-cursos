import Vue from 'vue';
import App from './App.vue';
import router from './router';
import PageLoaading from './components/PageLoading.vue';

Vue.config.productionTip = false;

Vue.component('PageLoading', PageLoaading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
