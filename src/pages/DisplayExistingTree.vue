<template>
  <div class="container">
    <h1>Display existing tree page</h1>

    <div class="collection-wrapper">
      <button v-if="loadedTree.length > 0"
              class="loadBtn btn yellow darken-3"
              type="button"
              @click="load"
      >Load last saved tree
        <font-awesome-icon icon="cloud-download-alt" />
      </button>

      <div v-if="tree.length">
        <Collection :branches="tree" />
        <div class="form__control"
             v-if="!showSaveBtn">
          <button class="saveBtn btn blue darken-3"
                  type="button"
                  @click="saveTree"
          >Save
            <font-awesome-icon icon="cloud-upload-alt" />
          </button>
        </div>
      </div>
      <div v-else><h6>There is no any trees, load or generate new</h6></div>
    </div>
  </div>
</template>

<script>
import { storageHandlers } from '@/helpers';

import {mapGetters, mapMutations} from 'vuex';
import * as M from '@/store/tree/mutation_types.js';

  export default {
    name: 'DisplayExistingTree',

    created() {
      let tree = storageHandlers.inStorage();
      if (tree) this[M.LOAD_TREE]({ tree });
    },

    methods: {
      ...mapMutations('tree', [
        'SET_TREE',
        'SAVE_TREE',
        'LOAD_TREE'
      ]),
      saveTree() {
        this[M.SAVE_TREE]();
        this.$message({text: 'The Tree has been saved', alert: true});
      },
      load() {
        this[M.SET_TREE]();
      }
    },

    computed: {
      ...mapGetters('tree', {
        tree: 'getTree',
        loadedTree: 'loadedTree'
      }),
      showSaveBtn() {
        const tree = storageHandlers.inStorage();
        return JSON.stringify(tree) === JSON.stringify(this.tree);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .collection-wrapper {
    position: relative;
    h6 {
      text-align: center;
      padding: 10rem 0;
    }
    .loadBtn {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .form__control {
    display: flex;
    justify-content: flex-end;
    .saveBtn {
      margin-bottom: 2rem;
    }
    @media (max-width: 441px) {
      .saveBtn {
        width: 100%;
      }
    }
  }
</style>