<template>
  <header :class="['page-header', size, theme]">
    <h1 class='title'>{{ title }}</h1>
    <div class='description'>
      <slot></slot>
    </div>
  </header>
</template>

<script>
  import { sizeValidator, themeValidator } from 'utils/propValidators'

  export default {
    name: 'page-header',
    props: {
      title: {
        type: String,
        default: '',
        required: true
      },
      size: {
        type: String,
        default: 'small',
        validator: sizeValidator
      },
      theme: {
        type: String,
        default: 'neutral',
        validator: themeValidator
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~styles/variables';

  .page-header {
    background: $color-background;
    color: $text-color-primary;
    text-align: center;
  }

  .page-header.primary {
    background: $color-primary;
    color: $text-color-primary-on-primary;
  }

  .page-header.secondary {
    background: $color-secondary;
    color: $text-color-primary-on-secondary;
  }

  .page-header.small {
    padding: $spacing-xl;
    min-height: 200px;
  }

  .page-header.medium {
    padding: $spacing-xxl;
    min-height: 400px;
  }

  .page-header.large {
    padding: $spacing-xxl;
    min-height: 95vh;
  }

  .title,
  .description {
    margin-left: auto;
    margin-right: auto;
    max-width: $breakpoint-tablet;
  }
</style>
