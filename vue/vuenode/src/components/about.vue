<template>
  <br>
  this is about and there is {{ count }}--{{ name }}
  <button @click="change">anniu</button>
  <hr>
  today's work has been done {{ doneToto }}
  <hr>
  <br>
  <div class="block">
    <span class="demonstration">Picker with quick options</span>
    <el-date-picker
        v-model="value"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        :size="size"
    />
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
// import {increment} from "@/index/increment";
// import { disabledDate, value, shortcuts} from "@/composables/datepicker"
import datepicker from "@/composables/datepicker";
export default {
  setup(){
    return{
      ...datepicker()
    }
  },
  name: "App",
  data() {
    return {
      num: 22
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
  },
}
// router.addRoute({path:'/tem',components:{default:about}})
</script>

<style scoped>

</style>