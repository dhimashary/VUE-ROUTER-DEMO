<template>
  <div>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import PostItem from '../components/PostItem'

export default {
  name: 'SideBar',
  props: [ 'posts' ],
  components: {
    PostItem
  }
}
</script>

<style>

</style>
