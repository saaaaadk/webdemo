<template>
  <br>
  this is home!{{ count }}
  <button @click="fun1">click</button>
  <hr>
  <br>


</template>

<script setup>
import {ref} from 'vue'

let count = ref(5)
let fun1 = function () {
  console.log('click')
}

</script>
