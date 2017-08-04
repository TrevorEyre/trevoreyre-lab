<template>
  <card class='experiment'
    :style='{backgroundImage: `url(${experiment.image})`}'>
    <div class='info'>
      <h2 class='title'>{{ experiment.title }}</h2>
      <p class='description' v-html='experiment.details'></p>
    </div>
  </card>
</template>

<script>
  import Card from 'components/Card'

  export default {
    name: 'experiment',
    components: {
      Card
    },
    props: {
      experiment: {
        type: Object,
        default: {
          title: '',
          details: '<p></p>',
          link: '#',
          image: ''
        },
        require: true
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~styles/variables';
  @import '~styles/mixins';

  .experiment {
    margin: $spacing-m;
    max-width: 750px;
    overflow: hidden;
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .experiment:hover .info,
  .experiment:hover .info:before {
    transform: translateY(0) translateZ(0);
  }

  .info {
    margin-top: 56.2%;
    border-top: 1px solid $border-color;
    background-color: #fff;
    @include breakpoint-desktop () {
      margin-top: 0;
      border-top: none;
      width: 100%;
      height: 421.5px;
      transform: translateY(100%)
        translateY(-88px)
        translateZ(0);
      transition: transform 0.5s ease-out;
    }
  }

  @supports (background-blend-mode: lighten) {
    @include breakpoint-desktop () {
      .info {
        background: inherit;
        background-blend-mode: lighten;
      }

      .info:before {
        display: block;
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
        filter: blur(10px);
        background: inherit;
        opacity: 0.25;
        transition: transform 0.5s ease-out;
        transform: translateY(-100%)
          translateY(88px)
          translateZ(0);
      }
    }
  }

  .title {
    margin: 0;
    padding: $spacing-l;
    line-height: 1;
    color: $text-color-primary;
  }

  .description {
    margin: 0;
    padding: 0 24px 24px;
    color: $text-color-primary;
  }
</style>
