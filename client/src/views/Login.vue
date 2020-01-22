<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        name: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('hai')
      // axios
      localStorage.setItem('access_token', this.form.email)
      this.$router.push('/')
      // programmatic navigation
    }
  },
  beforeRouteEnter (to, from, next) {
    // proses untuk dia udah login belom
    if (localStorage.getItem('access_token')) {
      next('/')
    } else {
      next()
    }
  }
}
</script>

<style>

</style>
