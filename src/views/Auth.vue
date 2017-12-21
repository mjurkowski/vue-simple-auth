<template>
  <div>
    <h1>Sign in</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
  import auth from '@/auth'

  export default {
    name: 'auth',
    mounted() {
      auth.authForm()
    }
  }
</script>

<style scoped>

</style>
