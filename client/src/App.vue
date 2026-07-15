<template>
  <div id="app" class="text-bg-light">
    <AppHeader/>
    <div class="main container">
      <router-view/>
    </div>
    <AppFooter class="mt-3" v-show="$route.meta.show"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
body {
  background-color: var(--bs-light);
}
</style>
