<template>
  <li class="collection-item">
    <div @click="clickHandler">{{ branch.name }}
      <span class="secondary-content"
            v-if="hasChildren">
        <template v-if="show">
          <font-awesome-icon icon="angle-right" />
        </template>
        <template v-else>
          <font-awesome-icon icon="angle-down" />
        </template>
      </span>
    </div>
    <div v-show="show" v-if="branch.children">
      <Collection :branches="branch.children" />
    </div>
  </li>
</template>

<script>

export default {
  name: 'CollectionItem',

  data: () => ({
    show: false
  }),

  props: {
    branch: {
      type: Object,
      required: true
    }
  },

  methods: {
    clickHandler() {
      if (this.branch.hasOwnProperty('children')) {
        this.show = !this.show;
      }
    }
  },

  computed: {
    hasChildren() {
      return this.branch.hasOwnProperty('children');
    }
  },
}
</script>

<style lang="scss" scoped>
  .secondary-content {
    padding-left: 1rem;
  }
</style>
