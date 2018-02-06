<template>
  <div>
    <!--<add-blog></add-blog>-->
    <show-blogs></show-blogs>
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog";
import ShowBlogs from "./components/ShowBlogs";

export default {
  components: {
    "add-blog": AddBlog,
    "show-blogs": ShowBlogs,
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  body{
    margin: 0;
    font-family: "Nunito SemiBold";
  }
</style>
