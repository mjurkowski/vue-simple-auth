<template>
  <div v-if="user">
    <h1>Hello USER!</h1>
    <button @click="logOut">Log out</button>
    <hr>
    <img :src="user.photoURL" style="height: 120px"> <br>
    <p>{{user.displayName}}</p>
    <p>{{user.email}}</p>
    <p>{{user.uid}}</p>
    <hr>
    <pre>{{user}}</pre>
  </div>
</template>

<script>
  import auth from '@/auth'

  export default {
    name: 'auth-success',
    computed: {
      user() {
        return this.$store.getters['user/user']
      }
    },
    methods: {
      logOut() {
        auth.logout()
      }
    }
  }
</script>

<style scoped>

</style>
