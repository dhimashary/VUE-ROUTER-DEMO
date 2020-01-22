<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view
        :posts='posts'
      />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      posts: []
    }
  },
  components: {
    Navbar
  },
  methods: {
    fetchPost () {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/posts'
      })
        .then(({ data }) => {
          this.posts = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchPost()
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
