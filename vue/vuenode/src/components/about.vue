<template>
  <br>
  this is about and there is {{ count }}--{{ name }}
  <button @click="change">anniu</button>
  <hr>
  today's work has been done {{ doneToto }}
</template>

<script>
import {mapState, mapGetters,mapActions} from 'vuex'
// import {increment} from "@/index/increment";

export default {
  name: "App",
  data() {
    return {
      num: 22,
    }
  },
  methods: {
    change() {
    //   this.$index.commit({type: increment, n: 20})
      this.$store.dispatch('increment')
    }
  }, computed: {
    ...mapActions(['increment']),
    ...mapGetters(['doneToto']),
    ...mapState(['count', 'name']),
    myNum() {
      return this.num + 10
    }
  }

}
// router.addRoute({path:'/tem',components:{default:about}})
</script>

<style scoped>

</style>