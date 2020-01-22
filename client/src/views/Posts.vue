<template>
  <div class="about">
    <h1>This is POST PAGES</h1>
    <div class="row">
      <div class="col-3">
        <SideBar :posts="posts"/>
      </div>
      <router-view :posts="posts"></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/Sidebar'
export default {
  name: 'Post',
  props: [ 'posts' ],
  components: {
    SideBar
  }
}
</script>
