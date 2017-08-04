<template>
  <div>
    <grid>
      <div v-for='experiment in experiments'>
        <a :href='experiment.link' target='_blank'>
          <experiment :experiment='experiment'></experiment>
        </a>
      </div>
    </grid>
    <!-- <pre class='json' v-text='experiments'></pre> -->
  </div>
</template>

<script>
  import orderedPens from 'utils/pens'
  import Grid from 'components/Grid'
  import Experiment from 'components/Experiment'

  export default {
    name: 'experiments',
    components: {
      Grid,
      Experiment
    },
    data () {
      return {
        experiments: []
      }
    },
    created () {
      fetch('https://cpv2api.com/pens/public/trevoreyre?tag=featured')
        .then(response => response.json())
        .then((pens) => {
          console.log(pens) // eslint-disable-line
          this.experiments = orderedPens.map(id => (
            pens.data.filter(pen => pen.id === id)
              .map(pen => ({
                title: pen.title,
                details: pen.details.replace(/<[^>]+>/g, ''),
                link: pen.link,
                image: pen.images.large
              }))[0]
          ))
        })
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .json {
    text-align: left;
  }
</style>
