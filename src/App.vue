<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>
  <AppHeader class="shadow-sm" />
  <AppMain />
  <AppFooter class="bg-red position-relative" />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use './styles/main.scss' as *;
@use './styles/partials/reset.scss' as *;
</style>
