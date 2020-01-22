<template>
  <div class="col-9">
    {{ post }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SinglePost',
  props: [ 'posts' ],
  data () {
    return {
      post: {}
    }
  },
  methods: {
    fetchOnePost () {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/posts/' + this.$route.params.id
      })
        .then(({ data }) => {
          this.post = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchOnePost()
  },
  watch: {
    '$route.params.id': function () {
      this.fetchOnePost()
    }
  }
}
</script>

<style>

</style>
