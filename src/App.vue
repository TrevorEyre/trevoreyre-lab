<template>
  <div id='app'>
    <page-header title='Lab' theme='secondary' size='medium'>
      <p>A collection of code snippets and experiments.</p>
      <button-group>
        <te-button type='flat-inverse' theme='secondary'>
          See it on Codepen
        </te-button>
      </button-group>
    </page-header>
    <experiments></experiments>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import Button from 'components/Button'
  import ButtonGroup from 'components/ButtonGroup'
  import Experiments from 'components/Experiments'
  import PageFooter from 'components/PageFooter'
  import PageHeader from 'components/PageHeader'

  export default {
    name: 'app',
    components: {
      'te-button': Button,
      ButtonGroup,
      Experiments,
      PageFooter,
      PageHeader
    }
  }
</script>

<style lang='scss'>
  @import '~styles/variables';
  @import '~styles/mixins';
  @import '~styles/normalize';

  * {
    box-sizing: border-box;
    position: relative;
    transition: all .3s ease;
  }

  html {
    font-size: $font-size;
  }

  body {
    font-family: $font-stack;
    color: $text-color-primary;
    font-weight: 400;
    line-height: 1.45;
    background: $color-background;
  }

  h1, h2, h3, h4 {
    margin: 1.414em 0 0.5em;
    font-weight: inherit;
    line-height: 1.2;
  }

  h1 {
    margin-top: 0;
    font-size: 2.618em;
    @include breakpoint-tablet() {
      font-size: 4.236em;
      font-weight: 300;
    }
  }

  h2 {
    font-size: 1.618em;
    @include breakpoint-tablet() {
      font-size: 2.618em;
    }
  }

  h3 {
    font-size: 1.3em;
    @include breakpoint-tablet() {
      font-size: 1.618em;
    }
  }

  p {
    margin-bottom: 1.3em;
    line-height: 1.618;
    @include breakpoint-tablet() {
      font-size: 1.3em;
    }
  }

  small,
  .font_small {
    font-size: 0.618em;
  }
</style>
