<template>
  <p>my id is {{ $route.params.id }}</p>
  <router-link :to="'/user/'+$route.params.id+'/profile'">profile </router-link>|
  <router-link :to="'/user/'+$route.params.id+'/posts'">post</router-link>
  <router-view></router-view>
</template>

<script>

export default {
  name: "App",
  components: {},
  mounted() {
    console.log((this.$route.params.id))
  }

}

</script>

<style scoped>

</style>