<template>
  <div class="container">
    <h1>Generate a Tree page</h1>

    <div class="row">
      <form class="col offset-l2 l8 s12"
            @submit.prevent="generateTree">
        
        <div  v-for="input in inputs" :key="input.title + input.correction">
          <component :is="input.componentName" 
                     :input="input"
                     @get-range-field-data="onGetRangeFieldData($event)" />
        </div>

        <div class="form__control">
          <button class="btn waves-effect waves-light" type="submit">Generate
            <font-awesome-icon icon="paper-plane" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {inputs} from '@/helpers';
import { storageHandlers } from '@/helpers';

import RangeField from '@/components/RangeField';
import RangeFieldNoUiSlider from '@/components/RangeFieldNoUiSlider';

import { mapMutations } from 'vuex';
import * as M from '@/store/tree/mutation_types.js';  

  export default {
    name: 'GenerateTree',

    components: {
      RangeField,
      RangeFieldNoUiSlider
    },

    data: () => ({
      inputs
    }),

    created() {
      this.inputs.forEach(input => {
        this[M.SET_PARAMS]({
          id: input.id,
          value: input.start || input.slider.start
        });
      });
    },

    methods: {
      ...mapMutations('tree', [
        'SET_PARAMS',
        'GENERATE_TREE'
      ]),
      onGetRangeFieldData(data) {
        this[M.SET_PARAMS](data);
      },
      generateTree() {
        this[M.GENERATE_TREE]();
        this.$message({text: 'The Tree has been generated'});
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form__control {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
  }
  .saveBtn {
    display: none;
    margin-right: 1rem;
  }
</style>