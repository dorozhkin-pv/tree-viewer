<template>
  <ul class="collection">
    <CollectionItem :branch="branch" v-for="branch in branches" :key="branch.name + branch.id" />
  </ul>
</template>

<script>
import CollectionItem from '@/components/CollectionItem';

export default {
  name: 'Collection',

  props: {
    branches: {
      type: Array
    }
  },

  components: {
    CollectionItem
  }
}
</script>

<style lang="scss" scoped>
  .collection {
    display: inline-block;
    margin: 0;
    border: none;
    border-left: 2px solid #1565c0;
    border-bottom: 5px solid #1565c0;
  }
</style>
