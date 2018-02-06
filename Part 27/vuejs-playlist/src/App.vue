<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information of the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required name="" value="">
        <input type="password" placeholder="password" required name="" value="">
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit" type="button" name="button">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import FormHelper from "./components/FormHelper";

export default {
  components: {
    "form-helper": FormHelper,
  },
  data () {
    return {
      title: "I am a dynamic slot tile",
    }
  }
}
</script>

<style>

</style>
