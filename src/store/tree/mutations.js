import Vue from 'vue';
import * as M from './mutation_types';
import * as helpers from '@/helpers';
const { Tree, storageHandlers } = helpers;

export default {
  [M.SET_PARAMS](state, {id, value}) {
    Vue.set(state.params, id, value);
  },

  [M.GENERATE_TREE](state) {
    state.tree = new Tree(state.params).generate();
  },

  [M.SET_TREE](state) {
    state.tree = state.loadedTree;
    state.loadedTree = [];
  },

  [M.LOAD_TREE](state, { tree }) {
    state.loadedTree = tree;
  },

  [M.SAVE_TREE](state) {
    storageHandlers.setStorage(state.tree);
    state.loadedTree = [];
  },
}