<template>
  <div class="range-field">
    <label :for="input.id">
      {{ input.title }} <span v-if="input.correction">{{ input.correction }}</span>
    </label>
    
    <input type="range" 
           :id="input.id" 
           :min="input.min" 
           :max="input.max" 
           v-model="input.start"
           @change=onChange($event) />
    <span class="range-field__tooltip">{{ input.start }}</span>
  </div>
</template>

<script>

export default {
  name: 'RangeField',

  props: {
    input: {
      type: Object,
      required: true
    }
  },

  methods: {
    onChange(event) {
      this.$emit('get-range-field-data', {
        id: this.input.id,
        value: +event.target.value
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .range-field {
    position: relative;
    margin-bottom: 1rem;
    &__tooltip {
      position: absolute;
      top: 0;
      right: 0;
      color: #25a69a;
    }
    &>label>span {
      font-size: 1rem;
      font-weight: bold;
    }
  }
</style>
