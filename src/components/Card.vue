<template>
  <div class='card'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'card'
  }
</script>

<style lang='scss' scoped>
  @import '~styles/variables';

  .card {
    position: relative;
    border-radius: $border-radius-xl;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 5px 8px 0px rgba(0, 0, 0, 0.14),
      0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  }
</style>
