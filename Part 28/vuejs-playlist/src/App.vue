<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">FormOne</button>
    <button v-on:click="component = 'form-two'">FormTwo</button>
  </div>
</template>

<script>
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";

export default {
  components: {
    "form-one": FormOne,
    "form-two": FormTwo,
  },
  data () {
    return {
      component: "form-one"
    }
  }
}
</script>

<style>

</style>
