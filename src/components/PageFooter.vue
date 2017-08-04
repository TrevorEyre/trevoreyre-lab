<template>
  <footer class='page-footer'>
    <p class='copyright'>&copy; 2015 - 2017 Trevor Eyre</p>
  </footer>
</template>

<script>
  export default {
    name: 'page-footer'
  }
</script>

<style lang='scss' scoped>
  @import '~styles/variables';

  .page-footer {
    padding: $spacing-m;
    width: 100%;
    background: $color-primary;
    color: $text-color-primary-on-primary;
    text-align: center;
  }

  .copyright {
    margin: 0;
  }
</style>
