<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <HelloWorld msg="hello App!"/>
  <el-button>Default</el-button>
  <!--  <el-button type="danger" :icon="Delete" circle/>-->
  <el-button type="danger" :icon="Delete">danger</el-button>
  <hr>
  this is count :{{ count }}
  div class="demo-date-picker">
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
import HelloWorld from './components/HelloWorld.vue'
import {Delete} from '@element-plus/icons'
import datepicker from "@/composables/datepicker";

export default {
  setup() {
    return {
      count: 10, ...datepicker()
    }
  },
  data() {
    return {
      Delete,
      // value: "", size: '12',
      // shortcuts: [
      //   {
      //     text: 'Today',
      //     value: new Date(),
      //   },
      //   {
      //     text: 'Yesterday',
      //     value: () => {
      //       const date = new Date()
      //       date.setTime(date.getTime() - 3600 * 1000 * 24)
      //       return date
      //     },
      //   },
      //   {
      //     text: 'A week ago',
      //     value: () => {
      //       const date = new Date()
      //       date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      //       return date
      //     },
      //   },
      // ],
    }
  },
  name: 'App',
  components: {
    HelloWorld
  }, methods: {
    // disabledDate(time) {
    //   return time.getTime() > Date.now()
    // },
  },
  mounted() {
    // setTimeout(()=>{
    //   this.$router.push({name:'about'})
    // },1000)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
