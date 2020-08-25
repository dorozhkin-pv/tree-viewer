<template>
  <div class="range-field">
    <label class="range-field__label" :for="input.id">{{ input.title }}</label>
    <div ref="slider"></div>
    <div class="range-field__total">
      <span class="range-field__min">{{ minRange }}</span>
      <span>/</span>
      <span class="range-field__max">{{ maxRange }}</span>
    </div>
  </div>
</template>

<script>
import noUiSlider from 'nouislider';

export default {
  name: 'RangeFieldNoUiSlider',

  props: {
    input: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    minRange: null,
    maxRange: null,
  }),

  mounted() {
    noUiSlider.create(this.$refs.slider, this.input.slider);

    this.$refs.slider.noUiSlider.on('update',(values, handle) => {
      this[handle ? 'maxRange' : 'minRange'] = parseInt(values[handle]);
    });

    this.$refs.slider.noUiSlider.on('change', this.onChange);
  },

  methods: {
    updateSlider() {
      this.$refs.slider.noUiSlider.set([this.minRange, this.maxRange]);
    },
    onChange() {
      this.$emit('get-range-field-data', {
        id: this.input.id,
        value: [+this.minRange, +this.maxRange]
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/nouislider/distribute/nouislider.css';
  .range-field {
    position: relative;
    margin-bottom: 25px;
    color: #25a69a;
    &__label {
      display: inline-block;
      margin-bottom: 15px;
    }
    &__total {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: flex-end;
    }
  }
  .noUi {
    &-target {
      border-radius: 4px;
    }
    &-horizontal {
      height: 4px;
    }
  }
</style>
