<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
  import EmptyLayout from '@/layout/EmptyLayout';
  import MainLayout from '@/layout/MainLayout';

  export default {
    name: 'Navbar',
    
    components: {
      EmptyLayout,
      MainLayout
    },

    computed: {
      layout() {
        return this.$route.meta.layout + '-layout';
      }
    },
  }
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
</style>