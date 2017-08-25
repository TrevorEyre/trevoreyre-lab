<template>
  <div>
    <grid>
      <div v-for='experiment in experiments'>
        <a :href='experiment.link' target='_blank'>
          <experiment :experiment='experiment'></experiment>
        </a>
      </div>
    </grid>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import Grid from 'components/Grid'
  import Experiment from 'components/Experiment'

  export default {
    name: 'experiments',
    components: {
      Grid,
      Experiment
    },
    computed: mapState([
      'experiments'
    ]),
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
