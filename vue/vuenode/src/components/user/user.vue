<template>
  <p>my id is {{ id }}</p>
  <router-link :to="'/user/'+$route.params.id+'/profile'">profile</router-link>
  |
  <router-link :to="'/user/'+$route.params.id+'/posts'">post</router-link>
  <router-view></router-view>
</template>

<script>

export default {
  name: "App",
  props: ['id'],
  components: {},
  mounted() {
    console.log((this.id))
  }

}

</script>

<style scoped>

</style>