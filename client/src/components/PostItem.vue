<template>
  <div>
    <b-card
      :title="post.title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ post.author }}
      </b-card-text>

      <b-button :to="`/posts/${post.id}`" variant="primary">See More</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: Object
  }
}
</script>

<style>

</style>
