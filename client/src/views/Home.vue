<template>
  <div>
    SAYA DI HOME
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '../components/PostList'
// @ is an alias to /src

export default {
  name: 'home',
  props: [ 'posts' ],
  components: {
    PostList
  }
}
</script>
